const baseResponse = (
  data,
  stage = "chooseReward",
  selectedItem = null,
  selectedStep = null,
  error = false
) => ({
  states: {
    content: {
      text: {
        notAvailableError:
          "{unavailableReason, select, US_TAX {US Tax limit} INSUFFICIENT_REDEEMABLE_CREDIT {Not enough points} other {Not available} }",
      },
    },
    redeemStage: stage,
    amount: 0,
    exchangeError: error,
    loading: false,
    selectedItem: selectedItem,
    selectedStep: selectedStep,
  },
  data: {
    exchangeList: data,
  },
  callbacks: {
    exchangeReward: null,
    resetState: null,
    setStage: null,
    setExchangeState: null,
    refs: null,
  },
  refs: null,
});

const baseReward = {
  key: "",
  name: "",
  description:
    "Description of reward. Lorem ipsum dolor sit amet, consectetur adipiscing. Id nec semper sapien dignissim rhoncus nunc.",
  imageUrl: "",
  available: true,
  unavailableReason: null,
  unavailableReasonCode: null,
  ruleType: "FIXED_GLOBAL_REWARD",
  sourceUnit: "POINT",
  sourceValue: 10,
  prettySourceValue: "10 SaaSquatch Points",
  sourceMinValue: null,
  prettySourceMinValue: null,
  sourceMaxValue: null,
  prettySourceMaxValue: null,
  destinationMinValue: null,
  prettyDestinationMinValue: null,
  destinationMaxValue: null,
  prettyDestinationMaxValue: null,
  globalRewardKey: "",
  destinationUnit: null,
  steps: [],
};

const notEnoughPoints = {
  available: false,
  unavailableReasonCode: "INSUFFICIENT_REDEEMABLE_CREDIT",
};

const usTax = {
  available: false,
  unavailableReasonCode: "US_TAX",
};

const selected = {
  key: "r1",
};

const imageUrl = (props) => ({
  imageUrl: props,
});

const name = (props) => ({
  name: props,
});

const description = (props) => ({
  description: props,
});

const fixedValue = (props) => ({
  prettySourceValue: props,
});

const variableValue = (min, max, text) => ({
  ruleType: "VARIABLE_CREDIT_REWARD",
  sourceMinValue: min,
  prettySourceMinValue: min + " " + text,
  sourceMaxValue: max,
  prettySourceMaxValue: max + " " + text,
});

const data = [
  {
    ...baseReward,
    ...name("Free swag with a promo code"),
    ...imageUrl("https://i.imgur.com/n7vC4BR.png"),
    ...fixedValue("40 SaaSquatch Points"),
  },
  {
    ...baseReward,
    ...selected,
    ...name("Visa® Prepaid Card USD"),
    ...imageUrl("https://i.imgur.com/veHErQX.png"),
    ...variableValue(20, 80, "SaaSquatch Points"),
  },
  {
    ...baseReward,
    ...name("A very exclusive gift box"),
    ...imageUrl("https://i.imgur.com/93BvEgH.png"),
    ...fixedValue("30 SaaSquatch Points"),
  },
  {
    ...baseReward,
    ...name("$50 Store credit"),
    ...imageUrl("https://i.imgur.com/WkCMVSE.png"),
    ...fixedValue("100 SaaSquatch Points"),
  },
  {
    ...baseReward,
    ...name("Variable amount of store credit"),
    ...imageUrl("https://i.imgur.com/Jn2fE0s.png"),
    ...variableValue(20, 100, "SaaSquatch Points"),
  },
  {
    ...baseReward,
    ...notEnoughPoints,
    ...name("A very rare cactus"),
    ...imageUrl("https://i.imgur.com/hhlF2Ey.png"),
    ...fixedValue("2000 SaaSquatch Points"),
  },
  {
    ...baseReward,
    ...usTax,
    ...name("$1000 Store credit"),
    ...imageUrl("https://i.imgur.com/y9HSls1.png"),
    ...fixedValue("2000 SaaSquatch Points"),
  },
  {
    ...baseReward,
    ...notEnoughPoints,
    ...name("A holiday gift box"),
    ...imageUrl("https://i.imgur.com/dWEdB3p.png"),
    ...fixedValue("100 SaaSquatch Points"),
  },
];

export const rewardExchange = {
  ...baseResponse(data),
};

export const rewardExchangeSelected = {
  ...baseResponse(data, "chooseReward", {
    ...baseReward,
    ...selected,
    ...name("Visa® Prepaid Card USD"),
    ...imageUrl("https://i.imgur.com/veHErQX.png"),
    ...variableValue(20, 80, "SaaSquatch Points"),
  }),
};

const stepsData = (start, end, inc) => {
  const steps = [];
  for (let i = start; i <= end; i += inc) {
    steps.push({
      sourceValue: i,
      prettySourceValue: i + " SaaSquatch Points",
      destinationValue: i,
      prettyDestinationValue: "$" + i,
      available: true,
      unavailableReasonCode: null,
      unavailableReason: "",
    });
  }
  return steps;
};

const baseStep = (dst, dstUnit, src, srcUnit, available = true) => ({
  destinationValue: dst,
  prettyDestinationValue: dstUnit + dst,
  sourceValue: src,
  prettySourceValue: src + " " + srcUnit,
  available: available,
  unavailableReasonCode: null,
  unavailableReason: "",
});

export const chooseAmountVariable = {
  ...baseResponse(data, "chooseAmount", {
    ...baseReward,
    ...name("Visa® Prepaid Card USD"),
    ...imageUrl("https://i.imgur.com/veHErQX.png"),
    ...variableValue(20, 80, "SaaSquatch Points"),
    steps: [
      baseStep(20, "$", 40, "SaaSquatch Points"),
      baseStep(30, "$", 60, "SaaSquatch Points"),
      baseStep(40, "$", 80, "SaaSquatch Points"),
      baseStep(50, "$", 100, "SaaSquatch Points"),
      baseStep(60, "$", 120, "SaaSquatch Points"),
    ],
  }),
};

export const chooseAmountFixed = {
  ...baseResponse(data, "chooseAmount", {
    ...baseReward,
    ...name("Free swag with a promo code"),
    ...imageUrl("https://i.imgur.com/n7vC4BR.png"),
    ...fixedValue("40 SaaSquatch Points"),
  }),
};

export const confirmFixed = {
  ...baseResponse(data, "confirmation", {
    ...baseReward,
    ...name("A very exclusive gift box"),
    ...imageUrl("https://i.imgur.com/93BvEgH.png"),
    ...fixedValue("30 SaaSquatch Points"),
  }),
};

export const confirmVariable = {
  ...baseResponse(
    data,
    "confirmation",
    {
      ...baseReward,
      ...name("Visa® Prepaid Card USD"),
      ...imageUrl("https://i.imgur.com/veHErQX.png"),
      ...variableValue(20, 80, "SaaSquatch Points"),
    },
    baseStep(20, "$", 40, "SaaSquatch Points")
  ),
};

export const error = {
  ...baseResponse(
    data,
    "confirmation",
    {
      ...baseReward,
      ...name("Visa® Prepaid Card USD"),
      ...imageUrl("https://i.imgur.com/veHErQX.png"),
      ...variableValue(20, 80, "SaaSquatch Points"),
    },
    baseStep(20, "$", 40, "SaaSquatch Points"),
    true
  ),
};

export const success = {
  ...baseResponse(data, "success", {
    ...baseReward,
    ...name("A very exclusive gift box"),
    ...imageUrl("https://i.imgur.com/93BvEgH.png"),
    ...fixedValue("30 SaaSquatch Points"),
  }),
};
