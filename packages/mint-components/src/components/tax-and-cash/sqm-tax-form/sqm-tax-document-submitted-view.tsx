import { h } from "@stencil/core";
import { createStyleSheet } from "../../../styling/JSS";
import { intl } from "../../../global/global";
import { PayoutDetailsCardView, PayoutDetailsCardViewProps } from "../sqm-payout-details-card/sqm-payout-details-card";

export interface TaxDocumentSubmittedProps {
  states: {
    status: string;
    documentType: "W9" | "W8-BEN-E" | "W8-BEN";
    dateSubmitted: string;
    dateExpired?: string;
  };
  callbacks: { onClick: (props: any) => void };
  text: {
    status: {
      active?: string;
      notActive?: string;
      notVerified?: string;
      expired?: string;
    };
    badge: {
      submittedOn?: string;
      awaitingReview?: string;
      expiredOn?: string;
    };
    bankingInformationSectionHeader: string;
    taxDocumentSectionHeader: string;
    taxAlertHeader?: string;
    taxAlertMessage?: string;
    taxDocumentSectionSubHeader: string;
    newFormButton: string;
  };
}

const style = {
  WarningAlertContainer: {
    "&::part(base)": {
      backgroundColor: "var(--sl-color-red-100)",
      borderTop: "none",
    },
  },
  BankingInformationContainer: {
    maxWidth: "700px"
  },
  TaxDocumentsContainer: {
    marginTop: "var(--sl-spacing-x-large)",
    borderTop: "1px solid var(--sl-color-neutral-200)",
  },
  TaxFormDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "var(--sl-spacing-small)",
    alignItems: "baseline",
    marginTop: "-30px",
  },
  BadgeContainer: {
    "&::part(base)": {
      padding: "var(--sl-spacing-x-small)",
    },
  },
  NewFormButton: {
    marginTop: "var(--sl-spacing-x-small)",
  },
};

const sheet = createStyleSheet(style);
const styleString = sheet.toString();

export const TaxDocumentSubmittedView = (props: TaxDocumentSubmittedProps) => {
  const { states, text, callbacks } = props;

  // AL: Not sure what states will be yet, placeholder for now
  const testDetailsCardProps: PayoutDetailsCardViewProps = {
    loading: false,
    empty: false,
    otherCurrencies: false,
    mainCurrency: { currencyText: "USD", amountText: "100.00" },
    status: "upcoming",
    pendingStatusBadgeText: "Pending",
    upcomingStatusBadgeText: "Upcoming",
    nextPayoutStatusBadgeText: "Next payout",
    pendingDetailedStatusText: "Check rewards table for available date",
    upcomingDetailedStatusText: "November 1, 2022",
    nextPayoutDetailedStatusText: "November 1, 2022",
    otherCurrenciesText: "other currencies",
    w9PendingText: "Awaiting W-9 tax form",
    w9Pending: undefined,
    hasDatePending: true,
    hasW9Pending: false,
  };

  const statusMap = {
    NOT_VERIFIED: (
      <div class={sheet.classes.TaxFormDetailsContainer}>
        <sl-badge type="info" pill class={sheet.classes.BadgeContainer}>
          {text.status.notVerified}
        </sl-badge>
        <p>
          {text.badge.awaitingReview} {states.dateSubmitted}
        </p>
      </div>
    ),
    ACTIVE: (
      <div class={sheet.classes.TaxFormDetailsContainer}>
        <sl-badge type="success" pill class={sheet.classes.BadgeContainer}>
          {text.status.active}
        </sl-badge>
        <p>
          {text.badge.submittedOn} {states.dateSubmitted}
        </p>
      </div>
    ),
    NOT_ACTIVE: (
      <div class={sheet.classes.TaxFormDetailsContainer}>
        <sl-badge type="danger" pill class={sheet.classes.BadgeContainer}>
          {text.status.notActive}
        </sl-badge>
        <p>
          {text.badge.submittedOn} {states.dateSubmitted}
        </p>
      </div>
    ),
    EXPIRED: (
      <div class={sheet.classes.TaxFormDetailsContainer}>
        <sl-badge type="danger" pill class={sheet.classes.BadgeContainer}>
          {text.status.expired}
        </sl-badge>
        <p>
          {text.badge.expiredOn} {states.dateSubmitted}
        </p>
      </div>
    ),
  };

  const alertMap = {
    NOT_ACTIVE: (
      <sl-alert type="danger" open class={sheet.classes.WarningAlertContainer}>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        <strong>
          {intl.formatMessage(
            {
              id: `taxAlertHeader`,
              defaultMessage: text.taxAlertHeader,
            },
            {
              documentType: states.documentType,
            }
          )}
        </strong>
        <br />
        {intl.formatMessage(
          {
            id: `taxAlertMessage`,
            defaultMessage: text.taxAlertMessage,
          },
          {
            documentType: states.documentType,
          }
        )}
      </sl-alert>
    ),
    EXPIRED: (
      <sl-alert type="danger" open class={sheet.classes.WarningAlertContainer}>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        <strong>
          {intl.formatMessage(
            {
              id: `taxAlertHeader`,
              defaultMessage: text.taxAlertHeader,
            },
            {
              documentType: states.documentType,
            }
          )}
        </strong>
        <br />
        {intl.formatMessage(
          {
            id: `taxAlertMessage`,
            defaultMessage: text.taxAlertMessage,
          },
          {
            documentType: states.documentType,
          }
        )}
      </sl-alert>
    ),
  };

  return (
    <div>
      <style type="text/css">{styleString}</style>
      {(states.status === "NOT_ACTIVE" || states.status === "EXPIRED") &&
        alertMap[states.status]}
      <div>
        <h3>{text.bankingInformationSectionHeader}</h3>
        <div class={sheet.classes.BankingInformationContainer}>
          {/* AL: Placeholder for banking information. TBD with design with what belongs here */}
          <PayoutDetailsCardView {...testDetailsCardProps}/>
        </div>
      </div>
      <div class={sheet.classes.TaxDocumentsContainer}>
        <h3>{text.taxDocumentSectionHeader}</h3>
        <h4>{text.taxDocumentSectionSubHeader}</h4>
        {statusMap[states.status]}
      </div>
      <sl-button
        onClick={callbacks.onClick}
        type="primary"
        class={sheet.classes.NewFormButton}
      >
        {text.newFormButton}
      </sl-button>
    </div>
  );
};
