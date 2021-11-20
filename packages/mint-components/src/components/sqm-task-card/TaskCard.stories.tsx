import { FunctionalComponent, h } from "@stencil/core";
import { MatrixStory } from "./Matrix";
import {
  ProgressBar as ProgressBarView,
  TaskCardView,
} from "./sqm-task-card-view";

export default {
  title: "Components/Task Card",
};

export const NotRepeatable = () => {
  const oneAction = {
    points: 20,
    title: "Complete a survey",
    description:
      "Description of action and reward. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quisque commodo leo.",
    buttonText: "Take survey",
    onClick: () => {},
  };
  const coupleActions = {
    points: 40,
    title: "Comment on 5 articles",
    progress: 1,
    goal: 5,
    steps: 1,
    description:
      "Description of action and reward. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quisque commodo leo.",
    buttonText: "Start reading",
    onClick: () => {},
  };
  const manyActions = {
    points: 150,
    title: "Spend $500 at our Store",
    progress: 230,
    goal: 500,
    unit: "$",
    description:
      "Description of action and reward. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quisque commodo leo.",
    buttonText: "Visit our Store",
    onClick: () => {},
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 374px)",
      }}
    >
      <div>
        <h4>One Action</h4>
        <TaskCardView {...oneAction} /> <h5 />
        <TaskCardView {...oneAction} complete />
      </div>
      <div>
        <h4>A Couple Actions</h4>
        <TaskCardView {...coupleActions} /> <h5 />
        <TaskCardView {...coupleActions} progress={5} />
        <h5>Progress {">"} Goal</h5>
        <TaskCardView {...coupleActions} progress={9} />
      </div>
      <div>
        <h4>Many Actions</h4>
        <TaskCardView {...manyActions} /> <h5 />
        <TaskCardView {...manyActions} progress={500} />
      </div>
    </div>
  );
};

export const Repeatable = () => {
  const oneAction = {
    points: 20,
    title: "Complete a survey",
    description:
      "Description of action and reward. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quisque commodo leo.",
    repeatable: 0,
    buttonText: "Take survey",
    onClick: () => {},
  };
  const coupleActions = {
    points: 40,
    title: "Comment on 5 articles",
    goal: 5,
    steps: 1,
    repeatable: true,
    description:
      "Description of action and reward. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quisque commodo leo.",
    buttonText: "Start reading",
    onClick: () => {},
  };
  const manyActions = {
    points: 150,
    title: "Spend $500 at our Store",
    goal: 500,
    repeatable: true,
    unit: "$",
    description:
      "Description of action and reward. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quisque commodo leo.",
    buttonText: "Visit our Store",
    onClick: () => {},
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 374px)",
      }}
    >
      <div>
        <h4>One Action</h4>
        <TaskCardView {...oneAction} /> <h5 />
        <TaskCardView {...oneAction} repeatable={1} complete />
      </div>
      <div>
        <h4>A Couple Actions</h4>
        <TaskCardView {...coupleActions} progress={1} /> <h5 />
        <TaskCardView {...coupleActions} progress={5} /> <h5 />
        <TaskCardView {...coupleActions} progress={7} /> <h5 />
        <TaskCardView {...coupleActions} progress={10} /> <h5 />
        <TaskCardView {...coupleActions} progress={12} />
      </div>
      <div>
        <h4>Many Actions</h4>
        <TaskCardView {...manyActions} progress={100} /> <h5 />
        <TaskCardView {...manyActions} progress={500} /> <h5 />
        <TaskCardView {...manyActions} progress={650} /> <h5 />
        <TaskCardView {...manyActions} progress={1000} /> <h5 />
        <TaskCardView {...manyActions} progress={1200} />
      </div>
    </div>
  );
};

export const RepeatableWithExpiry = () => {
  const oneAction = {
    points: 20,
    title: "Complete a survey",
    expire: "Ends Nov 30, 2021",
    description:
      "Description of action and reward. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quisque commodo leo.",
    repeatable: 0,
    buttonText: "Take survey",
    onClick: () => {},
  };
  const coupleActions = {
    points: 40,
    title: "Comment on 5 articles",
    expire: "Ends Nov 30, 2021",
    goal: 5,
    steps: 1,
    repeatable: true,
    description:
      "Description of action and reward. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quisque commodo leo.",
    buttonText: "Start reading",
    onClick: () => {},
  };
  const manyActions = {
    points: 150,
    title: "Spend $500 at our Store",
    expire: "Ends Nov 30, 2021",
    goal: 500,
    repeatable: true,
    unit: "$",
    description:
      "Description of action and reward. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quisque commodo leo.",
    buttonText: "Visit our Store",
    onClick: () => {},
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 374px)",
      }}
    >
      <div>
        <h4>One Action</h4>
        <TaskCardView {...oneAction} /> <h5 />
        <TaskCardView {...oneAction} repeatable={1} complete />
      </div>
      <div>
        <h4>A Couple Actions</h4>
        <TaskCardView {...coupleActions} progress={1} /> <h5 />
        <TaskCardView {...coupleActions} progress={5} /> <h5 />
        <TaskCardView {...coupleActions} progress={7} /> <h5 />
        <TaskCardView {...coupleActions} progress={10} /> <h5 />
        <TaskCardView {...coupleActions} progress={12} />
      </div>
      <div>
        <h4>Many Actions</h4>
        <TaskCardView {...manyActions} progress={100} /> <h5 />
        <TaskCardView {...manyActions} progress={500} /> <h5 />
        <TaskCardView {...manyActions} progress={650} /> <h5 />
        <TaskCardView {...manyActions} progress={1000} /> <h5 />
        <TaskCardView {...manyActions} progress={1200} />
      </div>
    </div>
  );
};

export const ProgressBar = () => {
  const props = {
    goal: 4,
    progress: 2,
    repeatable: false,
    steps: 1,
  };
  return (
    <div>
      <MatrixStory
        matrix={{ progress: [1, 2, 5, 4, 3], steps: [0, 1, 2] }}
        props={props}
        Component={ProgressBarView}
      />
    </div>
  );
};
