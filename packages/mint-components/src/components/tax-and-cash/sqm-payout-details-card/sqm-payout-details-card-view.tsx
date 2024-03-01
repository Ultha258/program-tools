import { h } from "@stencil/core";
import { createStyleSheet } from "../../../styling/JSS";
import { PayPalIcon } from "../SVGs";

export type currencyAmount = {
  amountText: string;
  currencyText: string;
};

export interface PayoutDetailsCardViewProps {
  states: {
    loading?: boolean;
    mainCurrency: currencyAmount;
    status: "pending" | "upcoming" | "next payout";
    payoutType: "PAYPAL" | "BANK_TRANSFER";
    empty?: boolean;
    hasW9Pending?: boolean;
    hasDatePending?: boolean;
    paypalEmailAddress?: string;
    cardNumberPreview?: string;
    bankName?: string;
  };

  text: {
    pendingStatusBadgeText: string;
    upcomingStatusBadgeText: string;
    nextPayoutStatusBadgeText: string;
    pendingDetailedStatusText: string;
    upcomingDetailedStatusText: string;
    nextPayoutDetailedStatusText: string;
    w9PendingText: string;
    additionalW9Text?: string;
    otherCurrenciesText: string;
  };
}

const style = {
  Container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "var(--sl-spacing-large)",
    background: "var(--sl-color-neutral-0)",
    boxShadow: "0px 2px 4px rgba(28, 28, 33, 0.12)",
    borderRadius: "4px",
    padding: "var(--sl-spacing-large)",
    minHeight: "150px",
    border: "1px solid var(--sl-color-gray-200)",
    maxWidth: "450px",
  },
  StatusContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  MainCurrencyLabel: {
    fontWeight: "var(--sl-font-weight-normal)",
    color: "var(--sl-color-gray-500)",
  },
  MainCurrency: {
    margin: 0,
    fontSize: "32px",
    width: "auto",
  },
  SubduedRegularText: {
    fontSize: "var(--sl-font-size-small)",
    color: "var(--sl-color-gray-500)",
    margin: 0,
    width: "auto",
  },
  CurrenciesContainer: {
    display: "grid",
    width: "auto",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "var(--sl-spacing-xx-small) var(--sl-spacing-small)",
    paddingTop: "var(--sq-spacing-xx-small)",
    "& > :not(:last-child)": {
      borderRight: "1px solid var(--sl-color-gray-200)",
    },
    "& > :nth-child(3)": {
      border: "none",
    },
  },
  CurrencyContainer: {
    paddingRight: "var(--sl-spacing-small)",
    gap: "var(--sl-spacing-small)",
  },
  SubCurrencyText: {
    fontWeight: "var(--sl-font-weight-bold)",
    fontSize: "var(--sl-font-size-large)",
    margin: "0",
  },
  W9Container: {
    paddingTop: "var(--sl-spacing-large)",
    borderTop: "1px solid var(--sl-color-gray-200)",
  },
  SkeletonOne: {
    width: "25%",
    height: "16px",
  },
  SkeletonTwo: {
    width: "25%",
    height: "24px",
  },
  SkeletonThree: {
    width: "50%",
    height: "34px",
  },
};

export function PayoutDetailsCardView(props: PayoutDetailsCardViewProps) {
  const sheet = createStyleSheet(style);
  const styleString = sheet.toString();
  const { classes } = sheet;

  const { states, text } = props;

  const renderLoadingSkeleton = () => {
    return (
      <div class={classes.Container}>
        <div class={classes.StatusContainer}>
          <sl-skeleton class={classes.SkeletonOne}></sl-skeleton>
          <sl-skeleton class={classes.SkeletonTwo}></sl-skeleton>
        </div>
        <sl-skeleton class={classes.SkeletonThree}></sl-skeleton>
        <sl-skeleton class={classes.SkeletonOne}></sl-skeleton>
      </div>
    );
  };

  return (
    <div>
      <style type="text/css">{styleString}</style>
      {states.loading ? (
        renderLoadingSkeleton()
      ) : (
        <div class={classes.Container}>
          <div class={classes.StatusContainer}>
            <p class={classes.SubduedRegularText}>
              {text.nextPayoutDetailedStatusText}
            </p>
            <sl-badge pill type={"success"}>
              {text.nextPayoutStatusBadgeText}
            </sl-badge>
          </div>

          <h1 class={classes.MainCurrency}>
            {states.mainCurrency?.amountText}
            {states.mainCurrency.currencyText}
          </h1>

          {states.payoutType === "PAYPAL" ? (
            <div style={{ display: "flex", gap: "var(--sl-spacing-small)" }}>
              <span>{states.paypalEmailAddress}</span>
              <PayPalIcon />
            </div>
          ) : (
            <div style={{ display: "flex", gap: "var(--sl-spacing-small)" }}>
              <span>{states.cardNumberPreview}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
