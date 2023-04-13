import { h } from "@stencil/core";
import { CopyTextView, CopyTextViewProps } from "../views/copy-text-view";
import scenario from "./sqm-coupon-code.feature";

export default {
  title: "Components/Coupon Code",
  parameters: {
    scenario,
  },
};

const defaultProps: CopyTextViewProps = {
  tooltiptext: "Copied to Clipboard",
  copyString: "THANKSJANE125uv125",
  open: false,
  copyButtonLabel: "Copy Coupon",
  inputPlaceholderText: "CODE ERROR",
};

export const CouponCode = () => {
  return <sqm-coupon-code tooltiptext="Copied to Clipboard"></sqm-coupon-code>;
};
export const CustomTooltipText = () => {
  return <sqm-coupon-code tooltiptext="CUSTOM TOOLTIP TEXT"></sqm-coupon-code>;
};
export const CustomTooltipDuration = () => {
  return (
    <sqm-coupon-code
      tooltiplifespan={5000}
      tooltiptext="CUSTOM TOOLTIP TEXT"
    ></sqm-coupon-code>
  );
};
export const TextAlignCenter = () => {
  return <sqm-coupon-code textAlign="center"></sqm-coupon-code>;
};
export const CopyButton = () => {
  return <sqm-coupon-code buttonStyle="button outside"></sqm-coupon-code>;
};
export const CopyButtonInside = () => {
  return (
    <CopyTextView
      {...defaultProps}
      buttonStyle={"button inside"}
    ></CopyTextView>
  );
};
export const CopyButtonBelow = () => {
  return (
    <CopyTextView {...defaultProps} buttonStyle={"button below"}></CopyTextView>
  );
};
export const ErrorPending = () => {
  return <CopyTextView {...defaultProps} errorState={"PENDING"}></CopyTextView>;
};
export const ErrorCancelled = () => {
  return (
    <CopyTextView {...defaultProps} errorState={"CANCELLED"}></CopyTextView>
  );
};
export const ErrorRedeemed = () => {
  return (
    <CopyTextView {...defaultProps} errorState={"REDEEMED"}></CopyTextView>
  );
};
export const ErrorExpired = () => {
  return <CopyTextView {...defaultProps} errorState={"EXPIRED"}></CopyTextView>;
};
export const ErrorButtonBelow = () => {
  return (
    <CopyTextView
      {...defaultProps}
      errorState={"PENDING"}
      buttonStyle="button below"
    ></CopyTextView>
  );
};
