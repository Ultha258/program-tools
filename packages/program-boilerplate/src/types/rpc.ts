import Transaction from '../transaction';

/********************************************************/
/*                          API                         */
/********************************************************/

/**
 * The different trigger handlers the programs should export
 */
export type TriggerType =
  | 'AFTER_USER_CREATED_OR_UPDATED'
  | 'AFTER_USER_EVENT_PROCESSED'
  | 'REFERRAL'
  | 'PROGRAM_INTROSPECTION'
  | 'SCHEDULED'
  | 'REWARD_SCHEDULED'
  | 'PROGRAM_VALIDATION';

/**
 * The Program type
 */
export type Program = {
  AFTER_USER_CREATED_OR_UPDATED?: ProgramTriggerHandler;
  AFTER_USER_EVENT_PROCESSED?: ProgramTriggerHandler;
  REFERRAL?: ProgramTriggerHandler;
  PROGRAM_INTROSPECTION?: ProgramIntospectionHandler;
  SCHEDULED?: ProgramTriggerHandler;
  REWARD_SCHEDULED?: ProgramTriggerHandler;
  PROGRAM_VALIDATION?: ProgramValidationFunctions;
};

/********************************************************/
/*                     Request Body                     */
/********************************************************/

/**
 * A JSON request body from the backend
 */
export type RequestBody = {
  messageType:
    | 'PROGRAM_TRIGGER'
    | 'PROGRAM_INTROSPECTION'
    | 'PROGRAM_VALIDATION';
};

/**
 * A JSON request body for the PROGRAM_TRIGGER case
 */
export type ProgramTriggerBody = RequestBody & {
  activeTrigger: any;
  program: any;
  ids: string[];
};

/**
 * A JSON request body for the PROGRAM_INTROSPECTION case
 */
export type ProgramIntospectionBody = RequestBody & {
  template: any;
  rules: any;
  program: any;
};

type ValidationRequest = {
  key: string;
  queryResult: any;
};

/**
 * A JSON request body for the PROGRAM_VALIDATION case
 */
export type ProgramValidationBody = RequestBody & {
  validationRequests: ValidationRequest[];
};

/********************************************************/
/*                       Handlers                       */
/********************************************************/

/**
 * Handler for the default program trigger cases
 */
export type ProgramTriggerHandler = (transaction: Transaction) => void;

/**
 * Introspection handler
 */
export type ProgramIntospectionHandler = (
  template: any,
  rules: any,
  program?: any,
) => any;

/**
 * Handler for an individual program prerequisite
 */
export type PrerequisiteHandler = (
  queryResult: any,
) => PrereqValidationResult[];

type ProgramValidationFunctions = {
  [key: string]: PrerequisiteHandler;
};

/********************************************************/
/*                        Results                       */
/********************************************************/

/**
 * The result of a program being triggered
 */
export type ProgramTriggerResult = {
  json: any;
  code: number;
};

/**
 * A result for an individual program prerequisite check
 */
export type PrereqValidationResult = {
  message: string;
  status: 'ERROR' | 'WARN' | 'SUCCESS';
};

/**
 * The end result of a program prerequisite check for `key`
 */
export type ValidationResult = {
  key: string;
  results: PrereqValidationResult[];
};

/********************************************************/
/*                         Misc                         */
/********************************************************/

/**
 * A program prerequisite
 */
export type ProgramPrerequisite = {
  key: string;
  name: string;
  description: string;
  query: string;
  queryVariables: {
    [key: string]: any;
  };
};
