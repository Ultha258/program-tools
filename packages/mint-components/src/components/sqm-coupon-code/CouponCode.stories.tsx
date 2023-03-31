import { h } from "@stencil/core";

export default {
  title: "Components/Coupon Code",
  parameters: {
    // scenario,
  },
};
export const CouponCode = () => {
  return <sqm-coupon-code tooltiptext="Copied to Clipboard"></sqm-coupon-code>;
};
export const CustomTooltipText = () => {
  return <sqm-coupon-code tooltiptext="CUSTOM TOOLTIP TEXT"></sqm-coupon-code>;
};
export const TextAlignCenter = () => {
  return <sqm-coupon-code textAlign="center"></sqm-coupon-code>;
};
export const CopyButton = () => {
  return <sqm-coupon-code isCopyIcon={false}></sqm-coupon-code>;
};
export const CustomTooltipDuration = () => {
  return (
    <sqm-coupon-code
      tooltiplifespan={5000}
      tooltiptext="CUSTOM TOOLTIP TEXT"
    ></sqm-coupon-code>
  );
};
