import { Component, Prop, Element } from '@stencil/core';
import { css } from 'emotion';
import marked from 'marked';

@Component({
  tag: 'sqh-program-component',
  styleUrl: 'program-component.scss'
})
export class ProgramComponent {
  @Prop() ishidden: boolean;
  @Prop() ismarkdown: boolean;
  @Prop() text: string;
  @Prop() textalign: string;
  @Prop() iconplacement:string;
  @Prop() icon:string;
  @Prop() ctaurl:string;
  @Prop() ctatext:string;
  @Prop() reward:string;
  @Element() textEl: HTMLElement;   

  render() {
    // const regex = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i;

    const textStyle = css`
      padding-top: inherit;
      padding-bottom: inherit;
      overflow-wrap: break-word;
      grid-column:3 / span 2;
      grid-row:2;
      text-align:left;
    `;

    const divStyle = css`
      background: #FFF;
      border:1px solid #555;
      padding:8px;
      text-align:center;
      height:125px;
      display:grid;
      grid-template-columns: 20% 5% 35% 35% 5%;
      grid-template-rows: 12.5% 25% 25% 25% 12.5%
    `;

    const iconDivStyle = css`
      grid-column:1;
      grid-row:2 / span 3;
      align-self:center;
    `

    const iconStyle = css`
      height:70px;
      vertical-align:middle;
    `

    const ctaStyle = css`
      border:1px solid #555;
      padding:6px 12px;
      grid-column:4;
      grid-row:4;
    `

    const rewardStyle = css`
      text-align:left;
      grid-column:3 / span 2;
      grid-row:4;
      align-self:center;
    `

    const content = this.ismarkdown
      ? <div innerHTML={marked(this.text)} />
      : this.text

    return !this.ishidden && 
      <div class={divStyle}>
        <div class={iconDivStyle}><img src={this.icon} class={iconStyle}></img></div>
        <p class={textStyle}>
          {content}
        </p>
        <p class={rewardStyle}>{this.reward}</p>
        {this.ctaurl && <a class={ctaStyle} href={this.ctaurl}><span>{this.ctatext}</span></a>}
      </div>;
  }
}