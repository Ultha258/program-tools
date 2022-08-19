import { StepDefinitions } from "jest-cucumber";

import { getWorld } from "../world";

const rulesSteps: StepDefinitions = ({ given }) => {
  given("there are no program rules", () => {
    getWorld().setState({
      current: {
        rules: undefined,
      },
    });
  });

  given("there are no reward rules", () => {
    getWorld().setState({
      current: {
        rules: {
          rewardRules: undefined,
        },
      },
    });
  });

  given(/^the current time is (\d+)$/, (time: string) => {
    getWorld().setState({
      current: {
        time: Number(time),
      },
    });
  });
};

export default rulesSteps;
