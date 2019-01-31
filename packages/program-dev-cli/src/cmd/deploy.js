import inquirer from 'inquirer';
import ora from 'ora';

import { createClient } from 'contentful-management';
import { readFile } from 'fs';

import { log, warn, error, bigWarn } from '../util/log';
import { getContext } from '../util/context';

const commandPreflightCheck = (args, config) => {
  if (args.length !== 1) {
    return 'Incorrect number of arguments provided';
  }
  if (!config) {
    return 'You are not logged in.';
  }
  if (!config.contentfulToken || !config.webtaskToken) {
    return 'One or more authentication tokens are missing.';
  }
  if (!config.space) {
    return 'Contentful space is not configured. Use `program-dev-cli space` to set up';
  }
  return null;
};

const hugeWarningConfirm = async (warnMessage, confirmMessage) => {
  bigWarn(warnMessage);
  const deployConfirmed = await inquirer.prompt([{
    type: 'confirm',
    name: 'confirmed',
    message: confirmMessage,
    default: true
  }]);
  return deployConfirmed.confirmed;
};

const deploy = async (argv) => {
  argv._.shift();
  const args = argv._;
  const context = getContext();
  const config = context.config;

  const preflightCheck = commandPreflightCheck(args, config);
  if (preflightCheck !== null) {
    log();
    error(preflightCheck);
    log();
    log('Exiting.');
    return;
  }

  if (config.space.live === true) {
    const confirmed = await hugeWarningConfirm(
      `Your space is set to '${config.space.name}'. Are you sure you want to deploy?`,
      `Yes, I really want to deploy to '${config.space.name}'.`
    );

    if (!confirmed) {
      log('Exiting.');
      return;
    }
  }

  const connectionSpinner = ora('Connecting to contentful').start();
  const client = createClient({
    accessToken: config.contentfulToken
  });

  const env = await client.getSpace(config.space.id)
    .then(space => {
      return space.getEnvironment('master');
    });

  connectionSpinner.succeed('Connected');
  const entryFindSpinner = ora('Finding entry ID...').start();

  readFile(args[0], 'utf8', async (err, data) => {
    if (err) {
      entryFindSpinner.fail('Failed to read schema file: ' + err.message);
      return;
    }

    const newSchema = JSON.parse(data);
    let entryId = await env.getEntries({'content_type': 'programTemplate'})
      .then(entries => {
        for (let prop in entries.items) {
          if (entries.items.hasOwnProperty(prop)) {
            let tmpSchema = entries.items[prop].fields.schema['en-US'];
            if (tmpSchema.name === newSchema.name
                && tmpSchema.summary === newSchema.summary
                && tmpSchema.longDescription === newSchema.longDescription) {
              return entries.items[prop].sys.id;
            }
          }
        }
      })
      .catch(err => {
        entryFindSpinner.fail('Error ocurred during entry ID search');
        return null;
      });

    if (!entryId) {
      entryFindSpinner.warn('Unable to automatically determine entry ID');
      const answer = await inquirer.prompt([{
        type: 'input',
        name: 'entryId',
        message: 'Please paste the entry ID:'
      }]);

      entryId = answer.entryId;
    } else {
      entryFindSpinner.succeed('Entry ID found');
    }

    return;
    const uploadSpinner = ora('Uploading...').start();

    env.getEntry(entryId)
      .then(entry => {
        entry.fields.schema['en-US'] = newSchema;
        return entry.update();
      })
      .then(entry => {
        if (entry.isUpdated()) {
          uploadSpinner.text = 'Publishing...';
          entry.publish().then(() => {
            uploadSpinner.succeed('Done, new version of schema published.');
          });
        } else {
          uploadSpinner.succeed('Done, no updates were made to schema.');
        }
      })
      .catch(err => {
        uploadSpinner.fail('Failed to upload schema: ' + err.message);
        return;
      });
  });

};

export const handler = deploy;