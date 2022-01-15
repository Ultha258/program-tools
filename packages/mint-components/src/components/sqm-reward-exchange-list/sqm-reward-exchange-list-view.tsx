import { getAssetPath, h } from "@stencil/core";
import { intl } from "../../global/global";
import { HostBlock } from "../../global/mixins";
import { createStyleSheet } from "../../styling/JSS";
import { ShareLinkView } from "../sqm-share-link/sqm-share-link-view";
import { ProgressBar } from "./progressBar";
import { CheckmarkFilled, ExchangeArrows, Gift } from "./SVGs";
import { ExchangeItem, ExchangeStep, Stages } from "./useRewardExchangeList";

export type RewardExchangeViewProps = {
  states: {
    selectedItem: ExchangeItem;
    selectedStep: ExchangeStep;
    redeemStage: string;
    amount: number;
    exchangeError?: boolean;
    queryError?: boolean;
    loading: boolean;
    open: boolean;
    content: {
      text: any;
    };
  };
  data: {
    exchangeList: any;
    fuelTankCode?: string;
  };
  callbacks: {
    exchangeReward: (e: unknown) => unknown;
    setStage: (stage?: Stages) => void;
    resetState: (refresh?: boolean) => void;
    setExchangeState: Function;
    copyFuelTankCode: () => void;
  };
  refs?: { canvasRef: any };
};

const stageList = ["chooseReward", "chooseAmount", "confirmation", "success"];

export function RewardExchangeView(props: RewardExchangeViewProps) {
  const { states, data, callbacks, refs } = props;
  const { selectedItem, selectedStep } = states;

  const stageProgressList = {
    chooseReward: states.content.text.chooseRewardTitle,
    chooseAmount: states.content.text.chooseAmountTitle,
    confirmation: states.content.text.confirmationTitle,
  };

  const style = {
    HostBlock: HostBlock,
    Container: {
      padding: "var(--sl-spacing-medium)",
      position: "relative",
    },
    FullImage: {
      objectFit: "contain",
      maxWidth: "100%",
      height: "250px",
      display: "flex",
      margin: "0 auto",
    },
    Select: {
      "&::part(label)": {
        color: "var(--sl-color-primary-500)",
      },
      "&::part(menu)": {
        maxHeight: "50vh",
      },
    },
    ProgressBar: {
      maxWidth: "350px",
      width: "100%",
      margin: "auto",
      marginBottom: "var(--sl-spacing-xxx-large)",
      "& .text-area": {
        marginTop: "5px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        whiteSpace: "nowrap",
        marginBottom: "6px",

        "& .text": {
          marginBottom: "var(--sl-spacing-x-small)",
          flex: "1 1 0",
        },
        "& .text.subdued": {
          color: "var(--sl-color-neutral-200)",
        },
      },
    },
    CardLayout: {
      display: "flex",
      width: "100%",
      borderRadius: "3px",
      background: "rgba(0, 0, 0, 0)",
    },
    Card: {
      display: "flex",
      userSelect: "none",
      height: "120px",
      "&::part(base)": {
        boxShadow: "none",
        width: "100%",
      },
      "&::part(body)": {
        display: "flex",
        padding: 0,
      },
      "& .selected": {
        position: "relative",
        top: "-2%",
        left: "100%",
        color: "var(--sl-color-primary-500)",
        margin: "-9px",
      },
    },
    Image: {
      padding: "var(--sl-spacing-small)",
      minWidth: "96px",
      maxWidth: "96px",
      "& .image": {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: "4px",
      },
      "& .image.subdued": {
        filter: "brightness(0.95)",
        opacity: "0.5",
      },
    },
    Square: {
      width: "120px",
      height: "118px",
      borderRadius: "3px 0 0 3px",
      "& .image": {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: "inherit",
      },
    },
    TextArea: {
      textAlign: "left",
      padding: "var(--sl-spacing-small)",
      paddingLeft: "0",
      "& .title": {
        fontSize: "var(--sl-font-size-medium)",
        lineHeight: "var(--sl-line-height-dense)",
        fontWeight: "600",
        color: "var(--sl-color-neutral-1000)",
        display: "-webkit-box",
        "-webkit-line-clamp": "1",
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
      },
      "& .amount": {
        fontSize: "var(--sl-font-size-small)",
        lineHeight: "var(--sl-line-height-dense)",
        marginTop: "var(--sl-spacing-x-small)",
        color: "var(--sl-color-neutral-500)",
        display: "-webkit-box",
        "-webkit-line-clamp": "1",
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
      },
      "& .error": {
        fontSize: "var(--sl-font-size-small)",
        lineHeight: "var(--sl-line-height-dense)",
        marginTop: "var(--sl-spacing-x-small)",
        fontWeight: "600",
        color: "var(--sl-color-warning-600)",
        display: "-webkit-box",
        "-webkit-line-clamp": "1",
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
        "& .icon": {
          position: "relative",
          top: "0.1em",
          marginRight: "var(--sl-spacing-xx-small)",
        },
      },
    },

    ChooseAmount: {
      margin: "var(--sl-spacing-medium) 0",
      "& .wrapper": {
        display: "flex",
        gap: "var(--sl-spacing-xx-large)",
        "@media (max-width: 799px)": {
          flexDirection: "column",
        },
      },
      "& .image": {
        width: "47%",
        objectFit: "contain",
        maxWidth: "100%",
        height: "250px",
        display: "flex",
        "@media (max-width: 799px)": {
          width: "auto",
        },
      },
      "& .text": {
        width: "53%",
        "@media (max-width: 799px)": {
          width: "auto",
        },
      },
      "& .title": {
        fontSize: "var(--sl-font-size-large)",
        fontWeight: "var(--sl-font-weight-semibold)",
        color: "var(--sl-color-neutral-1000)",
      },
      "& .points": {
        fontSize: "var(--sl-font-size-large)",
        fontWeight: "var(--sl-font-weight-semibold)",
        color: "var(--sl-color-primary-500)",
      },
      "& .description": {
        fontSize: "var(--sl-font-size-medium)",
        fontWeight: "var(--sl-font-weight-normal)",
        color: "var(--sl-color-neutral-500)",
        margin: "var(--sl-spacing-medium) 0",
        lineHeight: "var(--sl-line-height-dense)",
        marginTop: "var(--sl-spacing-xx-small)",
      },
      "& .space": {
        marginBottom: "var(--sl-spacing-xxx-large)",
      },
    },

    Success: {
      textAlign: "center",
      "& .title": {
        fontSize: "var(--sl-font-size-large)",
        fontWeight: "var(--sl-font-weight-semibold)",
        color: "var(--sl-color-neutral-1000)",
      },
      "& .description": {
        color: "var(--sl-color-neutral-400)",
        width: "100%",
        maxWidth: "350px",
        margin: "0 auto",
        lineHeight: "var(--sl-line-height-dense)",
        marginBottom: "var(--sl-spacing-xx-large)",
        marginTop: "var(--sl-spacing-xx-small)",
      },
    },

    Grid: {
      display: "grid",
      justifyContent: "center",
      gap: "20px",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    },

    Confirmation: {
      "& .wrapper": {
        display: "flex",
      },
      "& .padding": {
        padding: "var(--sl-spacing-medium) 0",
      },
      "& .field": {
        width: "40%",
        textTransform: "uppercase",
        fontSize: "var(--sl-font-size-medium)",
        fontWeight: "var(--sl-font-weight-normal)",
        color: "var(--sl-color-neutral-400)",
        textAlign: "right",
        paddingRight: "var(--sl-spacing-xxx-large)",
      },
      "& .value": {
        fontSize: "var(--sl-font-size-large)",
        fontWeight: "var(--sl-font-weight-semibold)",
      },
      "& .top-border": {
        borderTop: "1px solid var(--sl-color-neutral-200)",
      },
      "& .image": {
        width: "200px",
      },
    },

    Button: {
      display: "flex",
      flexWrap: "wrap-reverse",
      margin: "var(--sl-spacing-medium) 0",
      "& .cancel": {
        marginLeft: "auto",
        marginRight: "var(--sl-spacing-medium)",
        "&::part(base)": {
          fontWeight: "var(--sl-font-weight-normal)",
          color: "var(--sl-color-neutral-1000)",
        },
        "@media (max-width: 499px)": {
          width: "100%",
          marginRight: "0",
        },
      },
      "& .continue": {
        "&::part(base)": {
          background: "var(--sl-color-primary-500)",
          borderColor: "var(--sl-color-primary-500)",
          fontWeight: "var(--sl-font-weight-normal)",
          color: "var(--sl-color-neutral-0)",
        },
        "@media (max-width: 499px)": {
          width: "100%",
        },
      },
      "& .continue.right": {
        marginLeft: "auto",
      },
      "& .continue.center": {
        margin: "0 auto",
      },
    },
  };

  // JSS config
  const sheet = createStyleSheet(style);
  const styleString = sheet.toString();

  function getInput() {
    const item = states.selectedItem;
    if (!item || item?.ruleType === "FIXED_GLOBAL_REWARD")
      return <span>{item?.prettySourceValue}</span>;

    if (!item.steps?.length) {
      return (
        <p>
          {intl.formatMessage(
            {
              id: "notEnoughError",
              defaultMessage: states.content.text.notEnoughError,
            },
            {
              sourceUnit: item.sourceUnit,
            }
          )}
        </p>
      );
    }
    return (
      <sl-select
        style={{ width: "auto" }}
        label={states?.content?.text.selectText}
        class={sheet.classes.Select}
        value={states.selectedStep}
        onSl-select={(e) =>
          callbacks.setExchangeState({
            amount: e.detail?.item?.value?.sourceValue,
            selectedStep: e.detail?.item?.value,
          })
        }
      >
        {item.steps?.map((step) => (
          <sl-menu-item value={step} disabled={!step.available}>
            {step.prettyDestinationValue}
            {step.unavailableReasonCode && (
              <p
                style={{
                  fontSize: "var(--sl-font-size-small)",
                  color: "var(--sl-color-warning-500)",
                  margin: "0",
                }}
              >
                {intl.formatMessage(
                  {
                    id: "unavailableCode",
                    defaultMessage: states.content?.text?.notAvailableError,
                  },
                  {
                    unavailableReason: step.unavailableReasonCode,
                    sourceUnit: item.sourceUnit,
                    sourceValue:
                      step.prettySourceValue || item.prettySourceMinValue,
                  }
                )}
              </p>
            )}
            <div slot="suffix" style={{ marginBottom: "auto", float: "right" }}>
              {step.prettySourceValue}
            </div>
          </sl-menu-item>
        ))}
      </sl-select>
    );
  }

  function chooseReward() {
    return [
      <div>
        <h2 style={{ margin: "var(--sl-spacing-large) 0" }}>
          {states.content.text.rewardTitle}
        </h2>
        {states.loading ? (
          loading()
        ) : (
          <div class={sheet.classes.Grid}>
            {data.exchangeList?.map((item: ExchangeItem) => {
              const style = {
                boxShadow:
                  item.key === selectedItem?.key
                    ? "0 0 0 2px var(--sl-color-primary-500)"
                    : "none",
                borderRadius: "4px",
              };

              return (
                <div key={item.key} style={style}>
                  <sl-card
                    class={sheet.classes.Card}
                    style={{
                      cursor: item.unavailableReasonCode
                        ? "not-allowed"
                        : "pointer",
                    }}
                    onClick={() =>
                      item.available &&
                      callbacks.setExchangeState({ selectedItem: item })
                    }
                  >
                    {item.key === selectedItem?.key && (
                      <div class="selected">
                        <CheckmarkFilled />
                      </div>
                    )}
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        height: "120px",
                        borderRadius: "3px",
                        background: item.unavailableReasonCode
                          ? "rgba(0, 0, 0, 0.05)"
                          : "rgba(0, 0, 0, 0)",
                      }}
                    >
                      <div
                        class={sheet.classes.Image}
                        style={{
                          opacity: item.unavailableReasonCode ? "0.5" : "1",
                        }}
                      >
                        <img
                          class={
                            item.unavailableReasonCode
                              ? "image subdued"
                              : "image"
                          }
                          src={
                            item?.imageUrl ||
                            getAssetPath("./assets/placeholder.png")
                          }
                        />
                      </div>
                      <div
                        class={sheet.classes.TextArea}
                        style={{
                          opacity: item.unavailableReasonCode ? "0.5" : "1",
                        }}
                      >
                        <div
                          class="title"
                          style={{
                            "-webkit-line-clamp": item.unavailableReasonCode
                              ? "1"
                              : "2",
                          }}
                        >
                          {item.name ?? ""}
                        </div>
                        <div
                          class="amount"
                          style={{
                            "-webkit-line-clamp": item.unavailableReasonCode
                              ? "1"
                              : "2",
                          }}
                        >
                          {intl.formatMessage(
                            {
                              id: "sourceAmountMessage",
                              defaultMessage:
                                states.content?.text?.sourceAmountMessage,
                            },
                            {
                              ruleType: item.ruleType,
                              sourceValue: item.prettySourceValue,
                              sourceMinValue: item.prettySourceMinValue,
                              sourceMaxValue: item.prettySourceMaxValue,
                            }
                          )}
                        </div>
                        {item.unavailableReasonCode && (
                          <div class="error">
                            <sl-icon
                              class="icon"
                              name="exclamation-triangle-fill"
                            ></sl-icon>
                            {intl.formatMessage(
                              {
                                id: "unavailableCode",
                                defaultMessage:
                                  states.content?.text?.notAvailableError,
                              },
                              {
                                unavailableReasonCode:
                                  item.unavailableReasonCode,
                                sourceUnit: item.sourceUnit,
                                sourceValue:
                                  item.prettySourceValue ||
                                  item.prettySourceMinValue,
                              }
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </sl-card>
                </div>
              );
            })}
          </div>
        )}
        <div class={sheet.classes.Button}>
          <sl-button
            class="continue right"
            size="large"
            onClick={() => callbacks.setStage("chooseAmount")}
            loading={states.loading}
            disabled={!states.selectedItem}
          >
            {states.content.text.continueText}
          </sl-button>
        </div>
      </div>,
    ];
  }

  function chooseAmount() {
    const input = getInput();
    const isDisabled =
      states.selectedItem?.ruleType === "FIXED_GLOBAL_REWARD"
        ? false
        : input && !states.amount;
    return (
      <div>
        <div class={sheet.classes.ChooseAmount}>
          <div class="wrapper">
            <img
              class="image"
              src={
                selectedItem?.imageUrl ||
                getAssetPath("./assets/placeholder.png")
              }
            />
            <div class="text">
              <div class="title">{selectedItem?.name ?? ""}</div>
              {states.selectedItem?.ruleType === "FIXED_GLOBAL_REWARD" ? (
                <div class="points">{input}</div>
              ) : (
                <div class="description">{selectedItem?.description}</div>
              )}
              {states.selectedItem?.ruleType === "FIXED_GLOBAL_REWARD" ? (
                <div class="description">{selectedItem?.description}</div>
              ) : (
                <div class="points">{input}</div>
              )}
              <div class="space" />
            </div>
          </div>
        </div>

        <div class={sheet.classes.Button}>
          <sl-button
            class="cancel"
            size="large"
            type="text"
            onClick={() => callbacks.resetState()}
          >
            {states.content.text.cancelText}
          </sl-button>
          <sl-button
            class="continue"
            size="large"
            onClick={() => callbacks.setStage("confirmation")}
            disabled={isDisabled}
          >
            {states.content.text.continueToConfirmationText}
          </sl-button>
        </div>
      </div>
    );
  }

  function confirmation() {
    console.log(selectedItem);
    console.log(selectedStep);

    const cost =
      selectedStep?.prettySourceValue || selectedItem.prettySourceValue;

    const amount = selectedStep?.prettyDestinationValue;
    return (
      <div>
        <h2 style={{ margin: "var(--sl-spacing-large) 0" }}>
          {states.content.text.redeemTitle}
        </h2>

        <div class={sheet.classes.Confirmation}>
          <div class="wrapper">
            <div class="field">{states.content.text.rewardNameTitle}</div>
            <div>{selectedItem.name}</div>
          </div>
          <div class="wrapper">
            <div class="field"></div>
            <div>
              <img
                class="image"
                src={
                  selectedItem?.imageUrl ||
                  getAssetPath("./assets/placeholder.png")
                }
              />
            </div>
          </div>
          {amount && (
            <div class="wrapper top-border padding">
              <div class="field">{states.content.text.rewardAmountTitle}</div>
              <div>{amount}</div>
            </div>
          )}
          <div class="wrapper top-border padding">
            <div class="field">{states.content.text.costTitle}</div>
            <div class="value">{cost}</div>
          </div>
        </div>

        <div class={sheet.classes.Button}>
          <sl-button
            class="cancel"
            type="text"
            size="large"
            onClick={() => callbacks.setStage("chooseAmount")}
          >
            {states.content.text.backText}
          </sl-button>
          <sl-button
            class="continue"
            size="large"
            loading={states.loading}
            onClick={callbacks.exchangeReward}
          >
            {states.content.text.redeemText}
          </sl-button>
        </div>
      </div>
    );
  }

  function success() {
    console.log("success");
    return (
      <div class={sheet.classes.Success}>
        <Gift />
        <Confetti />
        <div class="title">{states.content.text.rewardRedeemedText}</div>
        <div class="description">
          {intl.formatMessage(
            {
              id: "successMessage",
              defaultMessage: states.content.text.redemptionSuccessText,
            },
            {
              sourceValue:
                states.selectedItem.prettySourceValue ??
                states.selectedStep?.prettySourceValue,
              destinationValue:
                states.selectedStep?.prettyDestinationValue ||
                states.selectedItem?.name ||
                states.selectedItem.globalRewardKey,
            }
          )}
        </div>
        {data?.fuelTankCode && (
          <div
            style={{
              width: "40%",
              margin: "-30px auto var(--sl-spacing-xxx-large) auto",
              textAlign: "left",
              color: "var(--sl-color-neutral-700)",
            }}
          >
            {states.content.text.promoCode}
            <ShareLinkView
              shareString={data.fuelTankCode}
              tooltiptext={states?.content?.text.toopTipText}
              open={states.open}
              onClick={callbacks.copyFuelTankCode}
            ></ShareLinkView>
          </div>
        )}
        <div class={sheet.classes.Button}>
          <sl-button
            class="continue center"
            type="primary"
            size="large"
            onClick={() => callbacks.resetState(true)}
          >
            {states.content.text.doneText}
          </sl-button>
        </div>
      </div>
    );
  }

  const stages = {
    chooseReward: () => chooseReward(),
    chooseAmount: () => chooseAmount(),
    confirmation: () => confirmation(),
    success: () => success(),
  };

  const currentStage = stages[states.redeemStage];

  function stageMap() {
    const stageNumber = stageList.indexOf(states.redeemStage);
    return (
      <div class={sheet.classes.ProgressBar}>
        <div class="text-area">
          {Object.keys(stageProgressList).map((stage) => {
            if (stageList.indexOf(stage) <= stageNumber) {
              return <span class="text">{stageProgressList[stage]}</span>;
            } else {
              return (
                <span class="text subdued">{stageProgressList[stage]}</span>
              );
            }
          })}
        </div>
        <ProgressBar stageCount={3} currentStage={stageNumber} />
      </div>
    );
  }

  function loading() {
    return (
      <div class={sheet.classes.Grid}>
        {[...Array(states.content.text.skeletonCardNum)].map(() => {
          return (
            <div>
              <sl-card class={sheet.classes.Card}>
                <div class={sheet.classes.CardLayout}>
                  <div>
                    <sl-skeleton
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "9px",
                        "--border-radius": "4px",
                      }}
                    ></sl-skeleton>
                  </div>

                  <div
                    style={{
                      margin:
                        "var(--sl-spacing-small) var(--sl-spacing-small) 0 0",
                      width: "100%",
                    }}
                  >
                    <sl-skeleton
                      style={{ marginBottom: "var(--sl-spacing-small)" }}
                    ></sl-skeleton>
                    <sl-skeleton
                      style={{ marginBottom: "var(--sl-spacing-small)" }}
                    ></sl-skeleton>
                    <sl-skeleton style={{ width: "45%" }}></sl-skeleton>
                  </div>
                </div>
              </sl-card>
            </div>
          );
        })}
      </div>
    );
  }

  function errorMessage() {
    return (
      <sl-alert type="danger" open>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        {states.content.text.redemptionError}
      </sl-alert>
    );
  }

  function queryErrorMessage() {
    return (
      <sl-alert type="danger" open>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        {states.content.text.queryError}
      </sl-alert>
    );
  }

  function Confetti() {
    return (
      <canvas
        ref={(canvas: HTMLCanvasElement & { confetti }) => {
          if (!refs?.canvasRef) return;
          refs.canvasRef.current = canvas;
        }}
        id="my-canvas"
        style={{
          pointerEvents: "none",
          position: "absolute",
          width: "500px",
          height: "500px",
          top: "5%",
          zIndex: "1",
          left: "25%",
        }}
      ></canvas>
    );
  }

  return (
    <div class={sheet.classes.Container}>
      <style type="text/css">{styleString}</style>
      <div>
        {console.log(props)}
        {stageMap()}
        {states.exchangeError && errorMessage()}
        {states.queryError && queryErrorMessage()}
        {currentStage && currentStage()}
        {states.redeemStage === "success"}
      </div>
    </div>
  );
}
