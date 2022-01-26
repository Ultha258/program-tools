import { h } from "@stencil/core";

export default {
  title: "Components/Titled Section",
};

export const AlignLeft = () => {
  return (
    <sqm-titled-section align="left">
      <sqm-text slot="label">
        <h3>Earn more rewards</h3>
      </sqm-text>
      <sqm-text slot="content">
        <p>
          Get points while using Klip. Use those points to redeem rewards like
          one free month of Klip Enterprise or two plane tickets to anywhere in
          North America
        </p>
      </sqm-text>
    </sqm-titled-section>
  );
};

export const AlignCenter = () => {
  return (
    <sqm-titled-section align="center">
      <sqm-text slot="label">
        <h3>Earn more rewards</h3>
      </sqm-text>
      <sqm-text slot="content">
        <p>
          Get points while using Klip. Use those points to redeem rewards like
          one free month of Klip Enterprise or two plane tickets to anywhere in
          North America
        </p>
      </sqm-text>
    </sqm-titled-section>
  );
};
export const AlignRight = () => {
  return (
    <sqm-titled-section align="right">
      <sqm-text slot="label">
        <h3>Earn more rewards</h3>
      </sqm-text>
      <sqm-text slot="content">
        <p>
          Get points while using Klip. Use those points to redeem rewards like
          one free month of Klip Enterprise or two plane tickets to anywhere in
          North America
        </p>
      </sqm-text>
    </sqm-titled-section>
  );
};

export const Padding = () => {
  return (
    <div>
      <h3>None</h3>
      <sqm-titled-section padding="none">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>xxx-small</h3>
      <sqm-titled-section padding="xxx-small">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>xx-small</h3>
      <sqm-titled-section padding="xx-small">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>x-small</h3>
      <sqm-titled-section padding="x-small">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>small</h3>
      <sqm-titled-section padding="small">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>medium</h3>
      <sqm-titled-section padding="medium">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>large</h3>
      <sqm-titled-section padding="large">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>x-large</h3>
      <sqm-titled-section padding="x-large">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>xx-large</h3>
      <sqm-titled-section padding="xx-large">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>xxx-large</h3>
      <sqm-titled-section padding="xxx-large">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>xxxx-large</h3>
      <sqm-titled-section padding="xxxx-large">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
    </div>
  );
};

export const LabelMargin = () => {
  return (
    <div>
      <h3>None</h3>
      <sqm-titled-section label-margin="none">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>xxx-small</h3>
      <sqm-titled-section label-margin="xxx-small">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>xx-small</h3>
      <sqm-titled-section label-margin="xx-small">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>x-small</h3>
      <sqm-titled-section label-margin="x-small">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>small</h3>
      <sqm-titled-section label-margin="small">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>medium</h3>
      <sqm-titled-section label-margin="medium">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>large</h3>
      <sqm-titled-section label-margin="large">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>x-large</h3>
      <sqm-titled-section label-margin="x-large">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>xx-large</h3>
      <sqm-titled-section label-margin="xx-large">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>xxx-large</h3>
      <sqm-titled-section label-margin="xxx-large">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
      <br />
      <hr />
      <br />
      <h3>xxxx-large</h3>
      <sqm-titled-section label-margin="xxxx-large">
        <sqm-text slot="label">
          <h3>Earn more rewards</h3>
        </sqm-text>
        <sqm-text slot="content">
          <p>
            Get points while using Klip. Use those points to redeem rewards like
            one free month of Klip Enterprise or two plane tickets to anywhere
            in North America
          </p>
        </sqm-text>
      </sqm-titled-section>
    </div>
  );
};
