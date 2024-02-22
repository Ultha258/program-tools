// 3 = ACH
// 5 = WIRE
// 7 = PAYPAL

export const mockPaymentOptions: {
  [key: string]: {
    country: string;
    currency: string;
    paymentMethod: 3 | 5 | 7;
    withdrawalId: number;
    defaultFxFee?: number;
  }[];
} = {
  CAD: [
    {
      country: "CA",
      currency: "CAD",
      paymentMethod: 3,
      withdrawalId: 37,
    },
    {
      country: "CA",
      currency: "CAD",
      paymentMethod: 7,
      withdrawalId: 37,
    },
  ],
  AUD: [
    {
      country: "US",
      currency: "AUD",
      paymentMethod: 5,
      withdrawalId: 23,
    },
    {
      country: "CA",
      currency: "AUD",
      paymentMethod: 5,
      withdrawalId: 21,
    },
    {
      country: "ES",
      currency: "AUD",
      paymentMethod: 5,
      withdrawalId: 25,
    },
    {
      country: "IE",
      currency: "AUD",
      paymentMethod: 5,
      withdrawalId: 25,
    },
    {
      country: "GB",
      currency: "AUD",
      paymentMethod: 5,
      withdrawalId: 25,
    },
    {
      country: "JP",
      currency: "AUD",
      paymentMethod: 5,
      withdrawalId: 21,
    },
    {
      country: "AU",
      currency: "AUD",
      paymentMethod: 3,
      withdrawalId: 37,
    },
    {
      country: "AU",
      currency: "AUD",
      paymentMethod: 7,
      withdrawalId: 37,
    },
  ],
  EUR: [
    {
      country: "US",
      currency: "EUR",
      paymentMethod: 5,
      withdrawalId: 23,
    },
    {
      country: "CA",
      currency: "EUR",
      paymentMethod: 5,
      withdrawalId: 21,
    },
    {
      country: "ES",
      currency: "EUR",
      paymentMethod: 3,
      withdrawalId: 25,
    },
    {
      country: "IE",
      currency: "EUR",
      paymentMethod: 3,
      withdrawalId: 25,
    },
    {
      country: "GB",
      currency: "EUR",
      paymentMethod: 3,
      withdrawalId: 25,
    },
    {
      country: "JP",
      currency: "EUR",
      paymentMethod: 5,
      withdrawalId: 21,
    },
    {
      country: "AU",
      currency: "EUR",
      paymentMethod: 5,
      withdrawalId: 21,
    },
  ],
  GBP: [
    {
      country: "US",
      currency: "GBP",
      paymentMethod: 5,
      withdrawalId: 23,
    },
    {
      country: "CA",
      currency: "GBP",
      paymentMethod: 5,
      withdrawalId: 21,
    },
    {
      country: "ES",
      currency: "GBP",
      paymentMethod: 5,
      withdrawalId: 25,
    },
    {
      country: "IE",
      currency: "GBP",
      paymentMethod: 5,
      withdrawalId: 25,
    },
    {
      country: "GB",
      currency: "GBP",
      paymentMethod: 3,
      withdrawalId: 25,
    },
    {
      country: "JP",
      currency: "GBP",
      paymentMethod: 5,
      withdrawalId: 21,
    },
    {
      country: "AU",
      currency: "GBP",
      paymentMethod: 5,
      withdrawalId: 21,
    },
    {
      country: "GB",
      currency: "GBP",
      paymentMethod: 7,
      withdrawalId: 25,
    },
  ],
  USD: [
    {
      country: "US",
      currency: "USD",
      paymentMethod: 3,
      withdrawalId: 39,
    },
    {
      country: "CA",
      currency: "USD",
      paymentMethod: 5,
      withdrawalId: 21,
    },
    {
      country: "ES",
      currency: "USD",
      paymentMethod: 5,
      withdrawalId: 25,
    },
    {
      country: "IE",
      currency: "USD",
      paymentMethod: 5,
      withdrawalId: 25,
    },
    {
      country: "GB",
      currency: "USD",
      paymentMethod: 5,
      withdrawalId: 25,
    },
    {
      country: "JP",
      currency: "USD",
      paymentMethod: 5,
      withdrawalId: 21,
    },
    {
      country: "AU",
      currency: "USD",
      paymentMethod: 5,
      withdrawalId: 21,
    },
    {
      country: "US",
      currency: "USD",
      paymentMethod: 7,
      withdrawalId: 39,
    },
  ],
  JPY: [
    {
      country: "JP",
      currency: "JPY",
      paymentMethod: 5,
      withdrawalId: 8279,
      defaultFxFee: 0,
    },
    {
      country: "JP",
      currency: "JPY",
      paymentMethod: 7,
      withdrawalId: 8279,
    },
  ],
};
