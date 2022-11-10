import { h } from "@stencil/core";
import {
  ScheduleCardView,
  ScheduleCardViewProps,
} from "./sqp-schedule-card-view";

export default {
  title: "Components/Schedule Card",
  // parameters: {
  //   scenario,
  // },
};

const defaultProps: ScheduleCardViewProps = {
  active: false,
  empty: false,
  setActivePayout: () => {},
  otherCurrencies: false,
  loading: false,
  statusText: "Oct 1, 2022",
  otherCurrenciesText: "5 other currencies",
  mainCurrency: {
    amountText: "30.00",
    currencyText: "USD",
  },
};

export const Default = () => {
  return <ScheduleCardView {...defaultProps} />;
};

export const Loading = () => {
  return <ScheduleCardView {...{ ...defaultProps, loading: true }} />;
};

export const Empty = () => {
  return <ScheduleCardView {...{ ...defaultProps, empty: true }} />;
};

export const WithOtherCurrencies = () => {
  return <ScheduleCardView {...{ ...defaultProps, otherCurrencies: true }} />;
};

export const Active = () => {
  return <ScheduleCardView {...{ ...defaultProps, active: true }} />;
};

export const Pending = () => {
  return <ScheduleCardView {...{ ...defaultProps, statusText: "Pending" }} />;
};
