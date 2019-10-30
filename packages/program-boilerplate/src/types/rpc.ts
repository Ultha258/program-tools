import Transaction from '../transaction';

/********************************************************/
/*                          API                         */
/********************************************************/

/**
 * The different trigger handlers the programs can export
 */
export type TriggerType =
  | 'AFTER_USER_CREATED_OR_UPDATED'
  | 'AFTER_USER_EVENT_PROCESSED'
  | 'REFERRAL'
  | 'PROGRAM_INTROSPECTION'
  | 'SCHEDULED'
  | 'REWARD_SCHEDULED'
  | 'PROGRAM_VALIDATION'
  | 'PROGRAM_TRIGGER_VARIABLES_SCHEMA_REQUEST';

/**
 * The Program type
 */
export type Program = {
  AFTER_USER_CREATED_OR_UPDATED?: ProgramTriggerHandler;
  AFTER_USER_EVENT_PROCESSED?: ProgramTriggerHandler;
  REFERRAL?: ProgramTriggerHandler;
  PROGRAM_INTROSPECTION?: ProgramIntrospectionHandler;
  SCHEDULED?: ProgramTriggerHandler;
  REWARD_SCHEDULED?: ProgramTriggerHandler;
  PROGRAM_VALIDATION?: ProgramValidationFunctions;
  PROGRAM_TRIGGER_VARIABLES_SCHEMA_REQUEST?: ProgramVariableSchemaHandler;
};

/********************************************************/
/*                     Request Body                     */
/********************************************************/

/**
 * A JSON request body for the PROGRAM_TRIGGER case. This type
 * may not be complete.
 */
export type ProgramTriggerBody = {
  messageType: 'PROGRAM_TRIGGER';
  activeTrigger: any;
  program: any;
  tenant: {
    settings: {
      suspectedFraudModerationState: string;
    };
  };
  ids: string[];
};

/**
 * A JSON request body for the PROGRAM_INTROSPECTION case
 */
export type ProgramIntrospectionBody = {
  messageType: 'PROGRAM_INTROSPECTION';
  template: any;
  rules: any;
  program: any;
  tenant: {
    tenantAlias: string;
    isLiveMode: boolean;
  };
};

/**
 * The program validation request contains the requirement key
 * to be validated along with the result of the graphql query
 * associated with the requirement
 */
export type ValidationRequest = {
  key: string;
  queryResult: any;
};

/**
 * The program information included by the backend for validation
 * requests
 */
export type ValidationProgramField = {
  id: string;
  rules: any;
};

/**
 * A JSON request body for the PROGRAM_VALIDATION case
 */
export type ProgramValidationBody = {
  messageType: 'PROGRAM_VALIDATION';
  validationRequests: ValidationRequest[];
  program: ValidationProgramField;
  time: number;
};

/**
 * The program information provided by the backend for
 * requesting custom schema
 */
export type ProgramVariableSchemaRequestBody = {
  messageType: 'PROGRAM_TRIGGER_VARIABLES_SCHEMA_REQUEST';
  schema: any;
  triggerType: TriggerType;
  scheduleKey?: string;
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
export type ProgramIntrospectionHandler = (
  template: any,
  rules: any,
  program?: any,
  tenant?: {
    tenantAlias: string;
    isLiveMode: boolean;
  },
) => any;

/**
 * Handler for an individual program requirement validation.
 * Handlers will be exported as key-value pairs in the
 * `ProgramValidationFunctions` type. They key corresponds to
 * a `ProgramRequirement` containing the query and query variables
 * that will be used to compute the `queryResult` parameter for this
 * function.
 */
export type RequirementValidationHandler = (
  queryResult: any,
  program: ValidationProgramField,
  time: number,
) => RequirementValidationResult[];

export type ProgramVariableSchemaHandler = (
  schema: any,
  triggerType: TriggerType,
  scheduleKey?: string,
) => any;
/**
 * Key-value list of validation functions to be exported by
 * the program
 */
type ProgramValidationFunctions = {
  [key: string]: RequirementValidationHandler;
};

/********************************************************/
/*                        Results                       */
/********************************************************/

/**
 * The result of a program being triggered. The JSON
 * is generated by the program and the status code is
 * calculated by the boilerplate depending on the result
 * of the trigger.
 */
export type ProgramTriggerResult = {
  json: any;
  code: number;
};

/**
 * A result for an individual program requirement check
 */
export type RequirementValidationResult = {
  message: string;
  longDescription: string;
  status: 'ERROR' | 'WARN' | 'SUCCESS';
};

/**
 * The end result of a program requirement check for `key`.
 * The key provided here corresponds to a key from the
 * `ProgramRequirement` type from below.
 */
export type ValidationResult = {
  key: string;
  results: RequirementValidationResult[];
};

/********************************************************/
/*                         Misc                         */
/********************************************************/

/**
 * A program requirement
 */
export type ProgramRequirement = {
  key: string;
  name: string;
  description: string;
  longDescription: string;
  query: string;
  queryVariables: {
    [key: string]: any;
  };
};
