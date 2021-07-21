import { h } from "@stencil/core";

export default {
  title: "Referral Table Cell",
};

export const TableCell = () => {
  return (
    <sqm-referral-table-cell innerTemplate="Table Cell Text"></sqm-referral-table-cell>
  );
};

export const TableUserCell = () => {
  return (
    <sqm-referral-table-user-cell name="Table User Cell Text"></sqm-referral-table-user-cell>
  );
};

export const StatusCell = () => {
  return (
    <div>
      <sqm-referral-table-status-cell
        statusText="Complete"
        converted={true}
      ></sqm-referral-table-status-cell>
      <sqm-referral-table-status-cell
        statusText="In Progress"
        converted={false}
      ></sqm-referral-table-status-cell>
    </div>
  );
};

export const DateCell = () => {
  return (
    <sqm-referral-table-date-cell
      date={800000000000}
    ></sqm-referral-table-date-cell>
  );
};

/* 
  TODO'S: 
  - Add more rewards
  - Empty and Loading states for tables
  - Build rewards for every type of reward
*/

const rewardsData: Reward = {
  id: "123",
  type: "reward",
  value: 100,
  unit: "test",
  name: "test",
  dateGiven: 100000,
  dateExpires: 10000000,
  dateCancelled: 134400,
  fuelTankCode: "ABC",
  fuelTankType: "Code",
  currency: "CAD",
  prettyValue: "$200",
  statuses: ["Status1"],
  globalRewardKey: "Key",
  rewardRedemptionTransactions: {
    data: [
      {
        exchangedRewards: {
          data: [
            {
              prettyValue: "$100",
              type: "Code",
              fuelTankCode: "ABC",
              globalRewardKey: "Key",
            },
          ],
        },
      },
    ],
  },
};

const rewards = [rewardsData];

export const RewardsCell = () => {
  return (
    <sqm-referral-table-rewards-cell
      rewards={rewards}
    ></sqm-referral-table-rewards-cell>
  );
};
