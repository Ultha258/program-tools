// @ts-check
import Transaction from './transaction';
import {rewardEmailQuery} from './queries';
import {meetCustomFieldRules, meetEventTriggerRules} from './conversion';
import {setRewardSchedule, getGoalAnalyticTimestamp} from './utils';

export {
  Transaction,
  meetEventTriggerRules,
  meetCustomFieldRules,
  rewardEmailQuery,
  setRewardSchedule,
  getGoalAnalyticTimestamp
}

/**
 * @typedef {Object} WebtaskContext
 * @property {WebtaskContextBody?} body
 */
/**
 * @typedef {Object} WebtaskContextBody
 * @property {Object?} activeTrigger
 * @property {Object?} program
 */

/**
 * @description A list of valid programTriggerTypes
 */

const ProgramTriggerTypes = [
  "AFTER_USER_CREATED_OR_UPDATED",
  "REFERRAL",
  "AFTER_USER_EVENT_PROCESSED",
  "SCHEDULED",
  "REWARD_SCHEDULED"];

/**
* A webtask that accepts handlers and returns a function fitting the webtask programming model.
*
* @example webtask ({
*          "AFTER_USER_CREATED_OR_UPDATED" : handleUserUpsert,
*          "AFTER_USER_EVENT_PROCESSED": handleUserEvent,
*          "REFERRAL": handleReferralTrigger,
*          "PROGRAM_INTROSPECTION": handleIntrospection
*           })
* @param {Object} handlers - Key-value pairs, where key is a ProgramTriggerType (see {@link ProgramTriggerTypes}) or "PROGRAM_INTROSPECTION";
* ProgramTrigger handlers must accept a transaction instance as parameter.
* Program-Introspection must accept a template as parameter and returns a new template.
* @returns {function} - A function that fits in the webtask programming model. See {@link https://webtask.io/docs/model}.
*
*
*/
export function webtask(handlers = {}) {
  const express = require('express')();
  const bodyParser = require('body-parser');
  const compression = require('compression');

  express.use(bodyParser.json());
  express.use(compression());

  // Enforce HTTPS. The server does not redirect http -> https
  // because OWASP advises not to
  express.use((req, res, next) => {
    console.log(`Serving request with protocol ${req.protocol}`);
    if (req.header('X-Forwarded-Proto') !== 'https') {
      return res.status(403).send({message: 'SSL required'});
    }

    // allow the request to continue if https is used
    next();
  });

  express.post('/', (context, res) => {
    switch (context.body.messageType || "PROGRAM_TRIGGER") {
      case "PROGRAM_INTROSPECTION":
        const template = context.body.template;
        const rules = context.body.rules;
        const program = context.body.program;
        // Make modifications to template based on rules here if necessary.
        // ...
        const handleIntrospection = handlers["PROGRAM_INTROSPECTION"];
        try {
          const newTemplate = handleIntrospection && (handleIntrospection(template,rules,program) || handleIntrospection(template,rules)) || template;
          res.status(200).json(newTemplate);
        } catch (e) {
          const errorMes = {
            error: "An error occurred in a webtask",
            message: e.toString(),
          };

          console.log(errorMes);
          res.status(500).json(errorMes);
        }
        break;
      case "PROGRAM_TRIGGER":
        const transaction = new Transaction({
          body: context.body,
          meta: undefined,
          storage: undefined,
          query: context.query,
          secrets: undefined,
          headers: context.headers,
          data: undefined,
        });
        const triggerType = context.body.activeTrigger.type;
        const handleTrigger = handlers[triggerType];

        try {
          if (handleTrigger) {
            handleTrigger(transaction);
          }

          res.status(200).json(transaction.toJson());
        } catch (e) {
          const errorMes = {
            error: "An error occurred in a webtask",
            message: e.toString(),
          };

          console.log(errorMes);
          res.status(500).json(errorMes);
        }

        break;
      default:
        console.log('UNREACHABLE CODE REACHED!!');
        res.status(400).send('Expected either PROGRAM_TRIGGER or PROGRAM_INTROSPECTION messageType.');
        break;
    }
  });

  return express;
}

// Returns a logger for the programs to use instead of
// console.log
export function getLogger(logLevel) {
  const winston = require('winston');

  const logFormat = winston.format.printf(({ level, message }) => {
    return `[${level.toUpperCase()}] ${message}`;
  });

  const logger = winston.createLogger({
    level: logLevel,
    format: winston.format.combine(
      logFormat
    ),
    transports: [new winston.transports.Console()]
  });

  return logger;
}
