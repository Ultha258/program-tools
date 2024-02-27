interface Referral {
  id: string;
  dateConverted: number;
  dateReferralStarted: number;
  dateReferralPaid: number;
  dateReferralEnded: number;
  moderationStatus: string;
  dateModerated: number | null;
  referredUser: {
    firstName: string;
    lastName: string;
    imageUrl: string;
    customFields?: {
      Saasquatch_Referral_Status__c: string;
    };
  };
  referrerUser: {
    firstName: string;
    lastName: string;
    imageUrl: string;
    customFields?: {
      Saasquatch_Referral_Status__c: string;
    };
  };
  fraudData?: {
    moderationStatus: "PENDING" | "APPROVED" | "DENIED";
    autoModerationStatus: "PENDING" | "APPROVED" | "DENIED";
    manualModerationStatus: "PENDING" | "APPROVED" | "DENIED";
  };
  rewards: Reward[];
}

interface Referrer {
  dateReferralStarted: number;
  dateConverted: number;
  referrerUser: {
    firstName: string;
    lastName: string;
  };
  rewards: Reward[];
}

type FraudStatus = "PENDING" | "DENIED" | "APPROVED";

interface Reward {
  id: string;
  type: string;
  value: number;
  unit: string;
  name: string;
  dateGiven?: number;
  meta?: { message?: string };
  dateScheduledFor: number;
  dateExpires: number;
  dateCancelled: number;
  datePayoutExpected?: number;
  datePayoutStarted?: number;
  datePayoutRetried?: number;
  dateRedeemed: number;
  fuelTankCode: string;
  fuelTankType: string;
  currency: string;
  prettyValue: string;
  prettyValueNumber?: string;
  prettyAvailableNumber?: string;
  prettyRedeemedNumber?: string;
  prettyRedeemedCredit?: string;
  prettyAssignedCredit?: string;
  prettyAvailableValue?: string;
  programId?: string;
  program?: {
    name: string;
  };
  statuses: string[];
  globalRewardKey?: string;
  rewardSource?:
    | "FRIEND_SIGNUP"
    | "REFERRED"
    | "MANUAL"
    | "ACTIVATION"
    | "ACQUISITION"
    | "RETENTION"
    | "REACTIVATION"
    | "AUTOMATED";
  exchangedRewardRedemptionTransaction?: {
    id: string;
    creditRedeemed: number;
    prettyRedeemedCredit: string;
    unit: string;
    dateRedeemed: number;
    redeemedRewards: Reward[];
    exchangedRewards: Reward[];
  };
  referral?: Referral;
  pendingReasons?: string[];
  cancelledReason?: "UNKNOWN" | "PROGRAM_GRAPH_MODERATION" | "SUSPECTED_FRAUD";
  rewardRedemptionTransactions: {
    data: [
      {
        exchangedRewards: {
          data: [
            {
              prettyValue: string;
              type: string;
              fuelTankCode: string;
              globalRewardKey?: string;
            }
          ];
        };
      }
    ];
  };
}

interface ReferralVariables {
  usefirstreward: boolean;
  referrercontent: string;
  convertedcontent: string;
  pendingcontent: string;
  pendingvalue: string;
  referrervalue: string;
  valuecontent: string;
  expiredvalue: string;
  expiredcontent: string;
  cancelledvalue: string;
  cancelledcontent: string;
}

interface RewardPickerReward {
  description: string;
  amount: number;
  unit: string;
  JSONata: string;
  key: string;
}

interface RewardBalance {
  type: string;
  unit: string;
  value: number;
  prettyValue: string;
}
declare module "*.md";
declare module "react";
