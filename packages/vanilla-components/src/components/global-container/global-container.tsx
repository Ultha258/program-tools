import { h, Component, Prop } from "@stencil/core";
import { css } from "emotion";
/**
 * @uiName Global Container
 */
@Component({
  tag: "sqh-global-container",
  styleUrl: "global-container.scss",
})
export class GlobalContainer {
  /**
   * Configure the background color.
   *
   * @uiName Background Color
   */
  @Prop() background: string;
  /**
   * Configure the color of the loading state.
   *
   * @uiName Loading Color
   */
  @Prop() loadingcolor: string;
  /**
   * Font family used inside the container.
   *
   * @uiName Font Family
   */
  @Prop() fontfamily: string;
  /**
   * Maximum width on the container.
   *
   * @uiName Max Width
   */
  @Prop() maxwidth: string;
  /**
   * Show and hide the powered by SaaSquatch link.
   *
   * @uiName Powered By
   */
  @Prop() poweredby: boolean;

  LoadingState(props) {
    const style = css`
      background-color: ${props.loadingcolor || "#439B76"};
    `;
    return (
      <div class="container-loading">
        <div class="loading-icon">
          <div class={`bar1 ${style}`}></div>
          <div class={`bar2 ${style}`}></div>
          <div class={`bar3 ${style}`}></div>
          <div class={`bar4 ${style}`}></div>
          <div class={`bar5 ${style}`}></div>
        </div>
      </div>
    );
  }

  render() {
    const style = css`
      background-color: ${this.background};
      font-family: ${this.fontfamily};
      position: relative;
      max-width: ${this.maxwidth};
    `;
    const robotoFont = (
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
        rel="stylesheet"
      />
    );
    const artifaktFont = (
      <link
        href="https://static-dc.autodesk.net/etc/designs/v201903181748/templates-general/structure/fonts/artifakt/clientlibs/artifakt.css"
        rel="stylesheet"
      />
    );

    return (
      <div class={style}>
        {this.fontfamily == "Roboto" ? robotoFont : ""}
        {this.fontfamily == "Artifakt Element" ? artifaktFont : ""}
        <slot />
        {this.poweredby ? (
          <a
            class="sqh-attribution"
            href="https://www.saasquatch.com/?utm_source=app&utm_medium=user-widget&utm_campaign=referral-widget"
            target="_blank"
          >
            Powered By Saasquatch
          </a>
        ) : (
          ""
        )}
        <this.LoadingState loadingcolor={this.loadingcolor} />
      </div>
    );
  }
}
