import { h } from "@stencil/core";
import { DateTime } from "luxon";
import column from "./columns/referral-table-column.feature";
import date from "./columns/referral-table-date-column.feature";
import rewards from "./columns/referral-table-rewards-column.feature";
import status from "./columns/referral-table-status-column.feature";
import user from "./columns/referral-table-user-column.feature";

const scenario = column + date + rewards + status + user;

export default {
  title: "Components/Referral Table Rewards Cell",
  parameters: {
    scenario,
  },
};

const baseReward: Reward = {
  id: "123",
  type: "CREDIT",
  value: 19,
  unit: "POINT",
  name: "test",
  dateGiven: 1627427794891,
  dateScheduledFor: getDays(),
  dateExpires: getMonths(),
  dateCancelled: 134400,
  dateRedeemed: 0,
  fuelTankCode: "ABC",
  fuelTankType: "Code",
  currency: "null",
  prettyValue: "19 Points",
  statuses: ["AVAILABLE"],
  globalRewardKey: "Key",
  rewardRedemptionTransactions: {
    data: [
      {
        exchangedRewards: {
          data: [
            {
              prettyValue: "19 Points",
              type: "CREDIT",
              fuelTankCode: "ABC",
              globalRewardKey: "Key",
            },
          ],
        },
      },
    ],
  },
};

const nullExpiresIn = {
  dateExpires: null,
};

const nullScheduledFor = {
  dateScheduledFor: null,
};

const nullFuelTank = {
  fuelTankCode: null,
};

// Reward Type Cases
const discountReward = {
  type: "PCT_DISCOUNT",
};

const creditReward = {
  type: "CREDIT",
};

const fuelTankReward = {
  type: "FUELTANK",
};

const integrationReward = {
  type: "INTEGRATION",
};

// Reward Status Cases
const pendingReward = {
  statuses: ["AVAILABLE", "PENDING"],
};
const cancelledReward = {
  statuses: ["PENDING", "CANCELLED"],
  dateCancelled: 1626850800000,
};
const expiredReward = {
  statuses: ["EXPIRED", "AVAILABLE"],
  dateExpires: 1626850800000,
};
const deniedReward = {
  statuses: ["DENIED"],
};
const pendingReviewReward = {
  statuses: ["PENDING_REVIEW"],
};
const redeemedReward = {
  statuses: ["AVAILABLE", "EXPIRED", "REDEEMED"],
};
const availableReward = {
  statuses: ["AVAILABLE"],
};

const zeroRewards = [];

const oneReward = [{ ...baseReward, ...availableReward }];

const twoRewards = [
  { ...baseReward, ...discountReward, ...pendingReward },
  { ...baseReward, ...creditReward },
];

const threeRewards = [
  { ...baseReward, ...fuelTankReward, ...nullExpiresIn },
  { ...baseReward, ...fuelTankReward, ...expiredReward },
  { ...baseReward, ...pendingReward, ...nullFuelTank },
];

const fiveRewards = [
  { ...baseReward, ...fuelTankReward },
  { ...baseReward, ...integrationReward },
  { ...baseReward, ...pendingReward },
  { ...baseReward, ...cancelledReward, ...nullExpiresIn, ...nullFuelTank },
  { ...baseReward, ...expiredReward, ...nullFuelTank },
];

const eightRewards = [
  { ...baseReward, ...redeemedReward, ...nullFuelTank },
  { ...baseReward, ...availableReward, ...nullExpiresIn },
  { ...baseReward, ...pendingReward },
  { ...baseReward, ...cancelledReward },
  { ...baseReward, ...expiredReward },
  { ...baseReward, ...pendingReward, ...nullExpiresIn, ...nullScheduledFor },
  { ...baseReward, ...cancelledReward },
  { ...baseReward, ...expiredReward },
];

const tenRewards = [
  { ...baseReward, ...integrationReward },
  { ...baseReward, ...redeemedReward },
  { ...baseReward, ...availableReward },
  { ...baseReward, ...cancelledReward, ...nullExpiresIn },
  { ...baseReward, ...expiredReward },
  { ...baseReward, ...pendingReward },
  { ...baseReward, ...discountReward },
  { ...baseReward, ...fuelTankReward },
  { ...baseReward, ...cancelledReward, ...nullExpiresIn },
  { ...baseReward, ...creditReward },
];

function getSeconds() {
  return DateTime.now().toMillis() + 10000;
}

function getMinutes() {
  return DateTime.now().toMillis() + 400000;
}

function getHours() {
  return DateTime.now().toMillis() + 9000000;
}

function getDays() {
  return DateTime.now().toMillis() + 600000000;
}

function getMonths() {
  return DateTime.now().toMillis() + 10000000000;
}

function getYears() {
  return DateTime.now().toMillis() + 200000000000;
}

const statusText =
  "{status, select, AVAILABLE {Available} CANCELLED {Cancelled} PENDING {Pending} EXPIRED {Expired} REDEEMED {Redeemed} AUTO_DENIED {Denied} MANUAL_DENIED {Denied} PENDING_REVIEW {Pending Review} other {Not available} }";
const statusLongText =
  "{status, select, AVAILABLE {Reward expiring on} CANCELLED {Reward cancelled on} PENDING {Available on} EXPIRED {Reward expired on} REDEEMED {Redeemed} AUTO_DENIED {Denied on} MANUAL_DENIED {Denied for self-referral on} PENDING_REVIEW {Pending since}  other {Not available} }";

export const PendingNoUnpend = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={[{ ...baseReward, ...pendingReward, ...nullScheduledFor }]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const PendingNoUnpendNoDetails = () => {
  return (
    <sqm-referral-table-rewards-cell
      hideDetails={true}
      rewards={[{ ...baseReward, ...pendingReward, ...nullScheduledFor }]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const NarrowColumnWithWideText = () => {
  return (
    <div style={{ width: "250px" }}>
      <sqm-referral-table-rewards-cell
        rewards={[
          { ...baseReward, ...pendingReward, dateScheduledFor: getDays() },
        ]}
        statusText={statusText}
        statusLongText={statusLongText}
        fuelTankText="Your code is"
        rewardReceivedText="Reward received on"
        expiringText="Expiring in"
        pendingForText="{status} for {date}"
      ></sqm-referral-table-rewards-cell>
      <sqm-referral-table-rewards-cell
        rewards={[{ ...baseReward, ...pendingReward }]}
        statusText={statusText}
        statusLongText={statusLongText}
        fuelTankText="Your code is"
        rewardReceivedText="Reward received on"
        expiringText="Expiring in"
        pendingForText="Pending for 300,000,000 months and some change"
      ></sqm-referral-table-rewards-cell>
      <sqm-referral-table-rewards-cell
        rewards={[
          { ...baseReward, ...pendingReward, dateScheduledFor: getYears() },
        ]}
        statusText={statusText}
        statusLongText={statusLongText}
        fuelTankText="Your code is"
        rewardReceivedText="Reward received on"
        expiringText="Expiring in"
        pendingForText="{status} for {date}"
      ></sqm-referral-table-rewards-cell>
    </div>
  );
};

export const PendingWithUnpend = () => {
  return [
    <sqm-referral-table-rewards-cell
      rewards={[
        { ...baseReward, ...pendingReward, dateScheduledFor: getSeconds() },
      ]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
    <sqm-referral-table-rewards-cell
      rewards={[
        { ...baseReward, ...pendingReward, dateScheduledFor: getMinutes() },
      ]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
    <sqm-referral-table-rewards-cell
      rewards={[
        { ...baseReward, ...pendingReward, dateScheduledFor: getHours() },
      ]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
    <sqm-referral-table-rewards-cell
      rewards={[
        { ...baseReward, ...pendingReward, dateScheduledFor: getDays() },
      ]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
    <sqm-referral-table-rewards-cell
      rewards={[
        { ...baseReward, ...pendingReward, dateScheduledFor: getMonths() },
      ]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
    <sqm-referral-table-rewards-cell
      rewards={[
        { ...baseReward, ...pendingReward, dateScheduledFor: getYears() },
      ]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
  ];
};

export const AvailableNoExpiry = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={[{ ...baseReward, ...availableReward, ...nullExpiresIn }]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const AvailableWithExpiry = () => {
  return [
    <sqm-referral-table-rewards-cell
      rewards={[
        { ...baseReward, ...availableReward, dateExpires: getSeconds() },
      ]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
    <sqm-referral-table-rewards-cell
      rewards={[
        { ...baseReward, ...availableReward, dateExpires: getMinutes() },
      ]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
    <sqm-referral-table-rewards-cell
      rewards={[{ ...baseReward, ...availableReward, dateExpires: getHours() }]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
    <sqm-referral-table-rewards-cell
      rewards={[{ ...baseReward, ...availableReward, dateExpires: getDays() }]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
    <sqm-referral-table-rewards-cell
      rewards={[
        { ...baseReward, ...availableReward, dateExpires: getMonths() },
      ]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
    <sqm-referral-table-rewards-cell
      rewards={[{ ...baseReward, ...availableReward, dateExpires: getYears() }]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>,
  ];
};

export const Redeemed = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={[{ ...baseReward, ...redeemedReward }]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const Cancelled = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={[{ ...baseReward, ...cancelledReward }]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const Expired = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={[{ ...baseReward, ...expiredReward }]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const Denied = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={[{ ...baseReward, ...deniedReward }]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const PendingReview = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={[{ ...baseReward, ...pendingReviewReward }]}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const EmptyCell = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={zeroRewards}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const oneRewardCell = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={oneReward}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const twoRewardsCell = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={twoRewards}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const threeRewardsCell = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={threeRewards}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const fiveRewardsCell = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={fiveRewards}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const eightRewardsCell = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={eightRewards}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};

export const tenRewardsCell = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={tenRewards}
      statusText={statusText}
      statusLongText={statusLongText}
      fuelTankText="Your code is"
      rewardReceivedText="Reward received on"
      expiringText="Expiring in"
      pendingForText="{status} for {date}"
    ></sqm-referral-table-rewards-cell>
  );
};
