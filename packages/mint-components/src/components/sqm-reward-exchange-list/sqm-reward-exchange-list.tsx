import { Component, h, Host, Prop, State, VNode } from "@stencil/core";
import { withHooks } from "@saasquatch/stencil-hooks";
import {
  ExchangeState,
  RewardExchangeProps,
  Stages,
  useRewardExchangeList,
  ExchangeStep,
} from "./useRewardExchangeList";
import {
  RewardExchangeViewProps,
  RewardExchangeView,
} from "./sqm-reward-exchange-list-view";
import { isDemo } from "@saasquatch/component-boilerplate";
import deepmerge from "deepmerge";
import { DemoData } from "../../global/demo";
import { getProps } from "../../utils/utils";
import { demoRewardExchange, rewardExchange } from "./RewardExchangeListData";
import { useReducer } from "@saasquatch/universal-hooks";

/**
 * @uiName Reward Exchange
 * @slots [{"name":"empty", "title":"Empty State"}]
 */
@Component({
  tag: "sqm-reward-exchange-list",
  assetsDirs: ["assets"],
  shadow: true,
})
export class SqmRewardExchangeList {
  @State()
  ignored = true;

  /**
   * Error message shown when reward is not available
   *
   * @uiName Not Available Error
   * @uiWidget textArea
   */
  @Prop() notAvailableError: string =
    "{unavailableReasonCode, select, US_TAX {US Tax limit} INSUFFICIENT_REDEEMABLE_CREDIT {{sourceValue} required} AVAILABILITY_PREDICATE {Not available} other {{unavailableReasonCode}} }";

  /**
   * @uiName Choose Reward Progress Title
   */
  @Prop() chooseRewardTitle: string = "Rewards";

  /**
   * @uiName Choose Amount Progress Title
   */
  @Prop() chooseAmountTitle: string = "Select";

  /**
   * @uiName Confirmation Progress Title
   */
  @Prop() confirmationTitle: string = "Confirm";

  /**
   * @uiName Reward Title Text
   */
  @Prop() rewardTitle: string = "Choose a reward";

  /**
   * @uiName Cancel Button Text
   */
  @Prop() cancelText: string = "Cancel";

  /**
   * @uiName Back Button Text
   */
  @Prop() backText: string = "Back";

  /**
   * @uiName Continue Button Text
   */
  @Prop() continueText: string = "Continue";

  /**
   * Displayed on the reward selection page.
   * @uiName Continue to Confirmation Button Text
   */
  @Prop() continueToConfirmationText: string = "Continue to confirmation";

  /**
   * @uiName Redeem Button Text
   */
  @Prop() redeemText: string = "Redeem";

  /**
   * Displayed as the header for the confirmation page.
   *
   * @uiName Confirmation Title Text
   */
  @Prop() redeemTitle: string = "Confirm and redeem";

  /**
   * Displayed on the success screen when a user successfully exchanges for a reward.
   *
   * @uiName Redemption Success Message
   * @uiWidget textArea
   */
  @Prop() redemptionSuccessText: string =
    "Redeemed {sourceValue} for {destinationValue}";

  /**
   * Displayed on the reward exchange cards.
   *
   * @uiName Reward Exchange Amount Text
   * @uiWidget textArea
   */
  @Prop() sourceAmountMessage: string =
    "{ruleType, select, FIXED_GLOBAL_REWARD {{sourceValue}} other {{sourceMinValue} to {sourceMaxValue}}}";

  /**
   * Shown when a user copies a fuel tank code
   *
   * @uiName Tooltip Text
   */
  @Prop() tooltipText: string = "Copied";

  /**
   * @uiName Done Text
   */
  @Prop() doneText: string = "Done";

  /**
   * @uiName Select Amount Text
   * @uiWidget textArea
   */
  @Prop() selectText: string = "Select amount to receive";

  /**
   * Shown if an error occurs when loading the reward exchange.
   *
   * @uiName Reward List Error Message
   * @uiWidget textArea
   */
  @Prop() queryError: string =
    "Unable to load reward exchange list. Please try again";

  /**
   * Shown if an error occurs during the reward exchange.
   *
   * @uiName Redemption Error Message
   * @uiWidget textArea
   */
  @Prop() redemptionError: string =
    "An error occured trying to redeem this reward. Please try again";

  /**
   * @uiName Not Enough Error Message
   * @uiWidget textArea
   */
  @Prop() notEnoughError: string =
    "Not enough {sourceUnit} to redeem for this reward";

  /**
   * @uiName Reward Redeemed Text
   */
  @Prop() rewardRedeemedText: string = "Reward redeemed";

  /**
   * @uiName Promo Code Text
   */
  @Prop() promoCode: string = "Promo Code";

  /**
   * Set the number of placeholder cards to be shown in loading state.
   *
   * @uiName Loading Cards
   */
  @Prop() skeletonCardNum: number = 8;

  /**
   * Shown in the confirmation state.
   *
   * @uiName Reward Row Title
   */
  @Prop() rewardNameTitle: string = "Reward";

  /**
   * Shown in the confirmation state.
   *
   * @uiName Reward Amount Row Title
   */
  @Prop() rewardAmountTitle: string = "Reward Amount";

  /**
   * Shown in the confirmation state.
   *
   * @uiName Cost Row Title
   */
  @Prop() costTitle: string = "Cost to Redeem";

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: DemoData<RewardExchangeViewProps>;

  /**
   * @undocumented
   * @uiType string
   */
  @Prop() demoDataString?: any;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const props: RewardExchangeProps = {
      ...getProps(this),
      empty: <EmptySlot />,
    };

    const { states, data, callbacks, refs } = isDemo()
      ? useRewardExchangeListDemo(props)
      : useRewardExchangeList(props);

    return (
      <Host style={{ display: "contents" }}>
        <RewardExchangeView
          states={states}
          data={data}
          callbacks={callbacks}
          refs={refs}
        ></RewardExchangeView>
      </Host>
    );
  }
}

function EmptySlot() {
  return (
    <slot name="empty">
      <sqm-empty
        emptyStateImage={
          "https://res.cloudinary.com/saasquatch/image/upload/v1644360953/squatch-assets/empty_exchange2.png"
        }
        emptyStateHeader="Redeem rewards"
        emptyStateText={
          "Use your points to redeem rewards once they become available"
        }
      />
    </slot>
  );
}

function useRewardExchangeListDemo(props: RewardExchangeProps) {
  const [exchangeState, setExchangeState] = useReducer<
    ExchangeState,
    Partial<ExchangeState>
  >(
    (state, next) => ({
      ...state,
      ...next,
    }),
    {
      selectedItem: undefined,
      selectedStep: undefined,
      redeemStage: "chooseReward",
      amount: 0,
      exchangeError: false,
    }
  );

  function setStage(stage?: Stages) {
    setExchangeState({ redeemStage: stage });
  }
  console.log("reward exchange props", { props });
  return deepmerge(
    {
      states: {
        content: {
          text: props,
        },
        redeemStage: exchangeState.redeemStage,
        amount: 0,
        selectedStep: undefined,
        selectedItem: exchangeState.selectedItem,
        open: false,
        exchangeError: false,
        queryError: false,
        loading: false,
        noExchangeOptions: false,
        empty: EmptySlot(),
      },

      data: {
        shareCode: "SHARECODE123",
        exchangeList: demoRewardExchange.data.exchangeList,
      },
      callbacks: {
        exchangeReward: () => {},
        setExchangeState,
        setStage,
        resetState: () =>
          setExchangeState({
            amount: 0,
            selectedStep: undefined,
            selectedItem: undefined,
            exchangeError: false,
            redeemStage: "chooseReward",
          }),
        copyFuelTankCode: () => {},
      },
      refs: {
        canvasRef: {},
      },
    },
    props.demoData || props.demoDataString
      ? JSON.parse(props.demoDataString)
      : {},
    { arrayMerge: (_, a) => a }
  );
}
