import { h } from "@stencil/core";
import {
  ReferralIframeView,
  ReferralIframeViewProps,
} from "../components/sqm-referral-iframe/sqm-referral-iframe-view";
import scenario from "../components/sqm-referral-iframe/sqm-referral-iframe.feature";

export default {
  title: "Referral Iframe",
  parameters: {
    scenario,
  },
};

const props: ReferralIframeViewProps = {
  data: {
    shareCode: "BOBBYREFER",
  },
  states: {
    content: {
      iframeSrc: "https://example.com",
      iframeHeight: "100%",
      iframeWidth: "100%",
    },
  },
};

export const ReferralIframe = () => {
  return (
    <div style={{ width: "1000px", height: "1000px" }}>
      <ReferralIframeView {...props} />
    </div>
  );
};
