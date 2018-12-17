import { Component, Prop } from '@stencil/core';
import ProgressBar  from 'progressbar.js';
import { css } from 'emotion';

@Component({
  tag: 'sqh-progress-circle',
  styleUrl: 'progress-circle.scss'
})
export class ProgressCircle {
  @Prop() ishidden: boolean = false;
  @Prop() tiername: string;
  @Prop() unit: string;
  @Prop() textcolor: string;
  @Prop() align: string;
  @Prop() progresstype: string = "Circle";

  componentDidLoad(){
    this.getProgress();
  }

  getProgress(){

    var bar = new ProgressBar[this.progresstype]('#container', {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#00cfff', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
    
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText('<img style="" src="">' + value + "%");
        }
    
      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';
    
    bar.animate(0.75);  // Number from 0.0 to 1.0
  }
  
  render() {
  const wrapperStyle = css`
    color: ${ this.textcolor };
    text-align: center;
  `

  const unitStyle = css`

  `

  const progressStyle = css`
    width: 200px;
    margin: 0 auto;
  `

    console.log(ProgressBar);
    return !this.ishidden && 
      <div class={wrapperStyle}>
        {this.tiername}
        <div class={progressStyle}>
        <div id="container" class={progressStyle}></div>;
        </div>

        {/* customer editable / automatically set */}
        <div class={unitStyle}>{this.unit}</div>

        {/* automatically set */}
        <div>Balance</div>

        {/* automatically set */}
        <div>Expiry</div>
      </div>;
  }
}