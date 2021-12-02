import { h, VNode } from "@stencil/core";
import jss from "jss";
import preset from "jss-preset-default";
import { HostBlock } from "../../global/mixins";
import * as SVGs from "./SVGs";
import {
  ProgressBarProps,
  ProgressBarView,
} from "./progress-bar/progress-bar-view";
import { DateTime } from "luxon";

export type TaskCardViewProps = {
  rewardAmount: number;
  cardTitle: string;
  description: string;
  showProgressBar: boolean;
  repeatable: boolean;
  showExpiry: boolean;
  dateExpires?: string;
  rewardUnit: string;
  buttonText: string;
  buttonLink: string;
  loading: boolean;
} & ProgressBarProps;

export function TaskCardView(props: TaskCardViewProps): VNode {
  console.log({ props });

  const checkmark_circle = SVGs.checkmark_circle();
  const arrow_left_right = SVGs.arrow_left_right();

  const style = {
    HostBlock: HostBlock,
    TaskCard: {
      "& .main > div": {
        margin: "var(--sl-spacing-medium)",
      },
      "& .main": {
        position: "relative",
        boxSizing: "border-box",
        minWidth: "347px",
        background: "var(--sl-color-white)",
        border: "1px solid var(--sl-color-neutral-300)",
        borderRadius: "var(--sl-border-radius-medium)",
        fontSize: "var(--sl-font-size-small)",
        lineHeight: "var(--sl-line-height-dense)",
      },
      "& .main.complete": {
        background: "var(--sl-color-success-50)",
        borderColor: "var(--sl-color-success-700)",
      },
    },
    Header: {
      display: "flex",
      "& .icon": {
        alignSelf: "center",
        lineHeight: "0",
        color: "var(--sl-color-success-700)",
        fontSize: "var(--sl-font-size-large)",
        marginRight: "var(--sl-spacing-x-small)",
      },
      "& .value": {
        alignSelf: "center",
        color: "var(--sl-color-black)",
        fontSize: "var(--sl-font-size-x-large)",
        fontWeight: "var(--sl-font-weight-semibold)",
        lineHeight: "100%",
        marginRight: "var(--sl-spacing-xx-small)",
      },
      "& .text": {
        alignSelf: "end",
        textTransform: "uppercase",
        color: "var(--sl-color-neutral-600)",
        fontSize: "var(--sl-font-size-x-small)",
        lineHeight: "var(--sl-font-size-medium)",
        marginRight: "var(--sl-spacing-xx-small)",
      },
    },
    Title: {
      color: "var(--sl-color-black)",
      fontSize: "var(--sl-font-size-small)",
      fontWeight: "var(--sl-font-weight-semibold)",
    },
    Footer: {
      display: "flex",
      "& .icon": {
        fontSize: "var(--sl-font-size-xx-small)",
        marginRight: "var(--sl-spacing-xx-small)",
      },
      "& .text": {
        marginTop: "auto",
        verticalAlign: "text-bottom",
        fontSize: "var(--sl-font-size-x-small)",
        color: "var(--sl-color-neutral-600)",
      },
      "& .success": {
        color: "var(--sl-color-success-600)!important",
        fontWeight: "var(--sl-font-weight-semibold)",
      },
      "& .action": {
        marginTop: "auto",
        marginLeft: "auto",
        "&::part(base)": {
          color: "var(--sl-color-white)",
          borderRadius: "var(--sl-border-radius-medium)",
        },
        "&.completed::part(base)": {
          border: "1px solid var(--sl-color-neutral-300)",
          background: "var(--sl-color-neutral-300)",
        },
      },
    },
  };

  jss.setup(preset());
  const sheet = jss.createStyleSheet(style);
  const styleString = sheet.toString();

  const showComplete = props.progress >= props.goal;
  const repetitions = props.showProgressBar
    ? Math.floor(props.progress / props.goal)
    : props.progress;
  const taskComplete = showComplete && props.repeatable === false;
  const dateExpire =
    props.showExpiry &&
    DateTime.fromISO(props.dateExpires.split("/").pop()).toLocaleString(
      DateTime.DATE_FULL
    );

  return (
    <div class={sheet.classes.TaskCard}>
      <div class={taskComplete ? "main complete" : "main"}>
        <style type="text/css">{styleString}</style>
        <div class={sheet.classes.Header}>
          {props.loading ? (
            <sl-skeleton style={{ width: "22%", margin: "0" }} />
          ) : (
            <div>
              {showComplete && <span class="icon">{checkmark_circle}</span>}
              <span class="value">{props.rewardAmount}</span>
              <span class="text">{props.rewardUnit}</span>
            </div>
          )}
        </div>

        {props.loading ? (
          <sl-skeleton style={{ width: "42%", margin: "0 16px" }} />
        ) : (
          <div class={sheet.classes.Title}>{props.cardTitle}</div>
        )}
        {props.loading ? (
          <sl-skeleton style={{ width: "51%", margin: "12px 16px" }} />
        ) : (
          <Details {...props} />
        )}
        {props.showProgressBar && props.loading ? (
          <sl-skeleton style={{ width: "92%", margin: "0 auto" }} />
        ) : (
          props.showProgressBar && (
            <ProgressBarView {...props} complete={taskComplete} />
          )
        )}
        <div class={sheet.classes.Footer}>
          {props.loading ? (
            <sl-skeleton style={{ width: "25%", marginLeft: "auto" }} />
          ) : (
            <div style={{ display: "contents" }}>
              <span class="text">
                {props.repeatable && (
                  <div>
                    <span class={repetitions > 0 ? "icon success" : "icon"}>
                      {arrow_left_right}
                    </span>
                    <span class={repetitions > 0 ? "success" : ""}>
                      {"Completed " + repetitions + " times"}
                    </span>
                  </div>
                )}
                {props.showExpiry && <span>{"Ends " + dateExpire}</span>}
              </span>

              <sl-button
                class={taskComplete ? "action completed" : "action"}
                type="primary"
                size="small"
                onClick={() => window.open(props.buttonLink)}
                disabled={taskComplete}
              >
                {props.buttonText}
              </sl-button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Details(props): VNode {
  const style = {
    Description: {
      "& input[type=checkbox]": {
        display: "none",
      },
      "& input:checked ~ .details": {
        transform: "rotate(-180deg)",
      },
      "& .details": {
        position: "absolute",
        top: "var(--sl-spacing-medium)",
        right: "var(--sl-spacing-medium)",
        color: "var(--sl-color-neutral-700)",
        fontSize: "var(--sl-font-size-large)",
        "& :hover": {
          color: "var(--sl-color-primary-700)",
        },
        transformOrigin: "50% 37%",
        transition: "transform var(--sl-transition-medium) ease",
      },
      "& input:checked ~ .summary": {
        transition: "all var(--sl-transition-medium) ease",
        maxHeight: "300px",
        marginBottom: props.steps
          ? "var(--sl-spacing-large)"
          : props.showProgressBar
          ? "var(--sl-spacing-xx-large)"
          : "var(--sl-spacing-large)",
      },
      "& .summary": {
        display: "block",
        overflow: "hidden",
        color: "var(--sl-color-neutral-700)",
        fontSize: "var(--sl-font-size-small)",
        maxHeight: "0px",
        transition: "all var(--sl-transition-fast) ease-out",
        marginBottom: "var(--sl-spacing-medium)",
      },
    },
  };

  jss.setup(preset());
  const sheet = jss.createStyleSheet(style);
  const styleString = sheet.toString();

  const rid = Math.random().toString(36).slice(2);

  return (
    <div>
      <style type="text/css">{styleString}</style>
      <span class={sheet.classes.Description}>
        <input type="checkbox" id={"details-" + rid} />
        <label class="details" htmlFor={"details-" + rid}>
          <sl-icon name="chevron-down"></sl-icon>
        </label>
        <span class="summary">{props.description}</span>
      </span>
    </div>
  );
}
