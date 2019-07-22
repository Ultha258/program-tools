import {getIntrospectionJson, getProgramTriggerJson} from '../faker';
import {World, Cucumber} from '../..';
import {triggerProgram, types} from '@saasquatch/program-boilerplate';

export function init(program: types.rpc.Program, cucumber: Cucumber): void {
  const {When} = cucumber;

  When('{string} runs', function(this: World, type: types.rpc.TriggerType) {
    const currentState = this.state.current || {};
    const {template, rules, programRewards} = currentState;

    let body;

    switch (type) {
      case 'PROGRAM_INTROSPECTION':
        body = getIntrospectionJson(template, rules, programRewards);
        break;
      default:
        body = getProgramTriggerJson({
          type,
          user: this.state.current.user,
          rules: this.state.current.rules,
        });
    }

    this.setState({
      programTriggerResult: triggerProgram(body, program).json,
    });
  });
}
