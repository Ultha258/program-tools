function t(t,n,r){return Math.min(Math.max(t,r),n)}class n extends Error{constructor(t){super(`Failed to parse color: "${t}"`);}}function r(r){if("string"!=typeof r)throw new n(r);if("transparent"===r.trim().toLowerCase())return [0,0,0,0];let e=r.trim();e=u.test(r)?function(t){const r=t.toLowerCase().trim(),e=o[function(t){let n=5381,r=t.length;for(;r;)n=33*n^t.charCodeAt(--r);return (n>>>0)%2341}(r)];if(!e)throw new n(t);return `#${e}`}(r):r;const f=s.exec(e);if(f){const t=Array.from(f).slice(1);return [...t.slice(0,3).map(t=>parseInt(_(t,2),16)),parseInt(_(t[3]||"f",2),16)/255]}const p=i.exec(e);if(p){const t=Array.from(p).slice(1);return [...t.slice(0,3).map(t=>parseInt(t,16)),parseInt(t[3]||"ff",16)/255]}const z=a.exec(e);if(z){const t=Array.from(z).slice(1);return [...t.slice(0,3).map(t=>parseInt(t,10)),parseFloat(t[3]||"1")]}const h=c.exec(e);if(h){const[e,o,_,s]=Array.from(h).slice(1).map(parseFloat);if(t(0,100,o)!==o)throw new n(r);if(t(0,100,_)!==_)throw new n(r);return [...l(e,o,_),s||1]}throw new n(r)}const e=t=>parseInt(t.replace(/_/g,""),36),o="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((t,n)=>{const r=e(n.substring(0,3)),o=e(n.substring(3)).toString(16);let _="";for(let t=0;t<6-o.length;t++)_+="0";return t[r]=`${_}${o}`,t},{}),_=(t,n)=>Array.from(Array(n)).map(()=>t).join(""),s=new RegExp(`^#${_("([a-f0-9])",3)}([a-f0-9])?$`,"i"),i=new RegExp(`^#${_("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),a=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${_(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),c=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,u=/^[a-z]+$/i,f=t=>Math.round(255*t),l=(t,n,r)=>{let e=r/100;if(0===n)return [e,e,e].map(f);const o=(t%360+360)%360/60,_=(1-Math.abs(2*e-1))*(n/100),s=_*(1-Math.abs(o%2-1));let i=0,a=0,c=0;o>=0&&o<1?(i=_,a=s):o>=1&&o<2?(i=s,a=_):o>=2&&o<3?(a=_,c=s):o>=3&&o<4?(a=s,c=_):o>=4&&o<5?(i=s,c=_):o>=5&&o<6&&(i=_,c=s);const u=e-_/2;return [i+u,a+u,c+u].map(f)};function p(t){const[n,e,o,_]=r(t).map((t,n)=>3===n?t:t/255),s=Math.max(n,e,o),i=Math.min(n,e,o),a=(s+i)/2;if(s===i)return [0,0,a,_];const c=s-i;return [60*(n===s?(e-o)/c+(e<o?6:0):e===s?(o-n)/c+2:(n-e)/c+4),a>.5?c/(2-s-i):c/(s+i),a,_]}function z(n,r,e,o){return `hsla(${(n%360).toFixed()}, ${t(0,100,100*r).toFixed()}%, ${t(0,100,100*e).toFixed()}%, ${parseFloat(t(0,1,o).toFixed(3))})`}function h(t,n){const[r,e,o,_]=p(t);return z(r+n,e,o,_)}function d(t,n){const[r,e,o,_]=p(t);return z(r,e,o-n,_)}function g(t,n){const[r,e,o,_]=p(t);return z(r,e-n,o,_)}function w(t){if("transparent"===t)return 0;function n(t){const n=t/255;return n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}const[e,o,_]=r(t);return .2126*n(e)+.7152*n(o)+.0722*n(_)}function x(t,n){const r=w(t),e=w(n);return r>e?(r+.05)/(e+.05):(e+.05)/(r+.05)}function m(n,r,e,o){return `rgba(${t(0,255,n).toFixed()}, ${t(0,255,r).toFixed()}, ${t(0,255,e).toFixed()}, ${parseFloat(t(0,1,o).toFixed(3))})`}function y(t,n,e){const o=(t,n)=>3===n?t:t/255,[_,s,i,a]=r(t).map(o),[c,u,f,l]=r(n).map(o),p=l-a,z=2*e-1,h=((z*p==-1?z:z+p)/(1+z*p)+1)/2,d=1-h;return m(255*(_*d+c*h),255*(s*d+u*h),255*(i*d+f*h),l*e+a*(1-e))}function b(){var n=[].slice.call(arguments);return r=>{const e=n.length-1,o=t(0,e,Math.floor(r*e)),_=t(0,e,Math.ceil(r*e)),s=1/e;return y(n[o],n[_],(r-s*o)/s)}}const k={decorative:1.5,readable:3,aa:4.5,aaa:7};function j(t,n="aa"){return x(t,"#fff")<k[n]}function $(t,n){return d(t,-n)}function v(t,n){const[e,o,_,s]=r(t);return m(e,o,_,s-n)}function q(t,n){return v(t,-n)}function F(t){return w(t)>.179}function M(t){return F(t)?"#000":"#fff"}function A(t,n){return g(t,-n)}function I(n){const[e,o,_,s]=r(n);let i=n=>{const r=t(0,255,n).toString(16);return 1===r.length?`0${r}`:r};return `#${i(e)}${i(o)}${i(_)}${s<1?i(Math.round(255*s)):""}`}function E(t){return m(...r(t))}function C(t){return z(...p(t))}

const colorScale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const lScale = [
  0.95,
  0.86,
  0.76,
  0.66,
  0.56,
  0.46,
  0.39,
  0.32,
  0.25,
  0.18,
  0.15, //weight 950
];
// https://github.com/ricokahler/color2k/blob/main/src/parseToRgba.ts
const hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
function niceParseToHsla(color) {
  const normalizedColor = color.trim();
  const hslaMatch = hslaRegex.exec(normalizedColor);
  if (hslaMatch) {
    const [h, s, l, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
    if (t(0, 100, s) !== s)
      throw new n(color);
    if (t(0, 100, l) !== l)
      throw new n(color);
    return [h, s / 100, l, a || 1];
  }
  // Warning -- converts to RGB first, so is lossy
  return p(color);
}
function generateScale(color, name = "primary") {
  const [h, s, l, a] = niceParseToHsla(color);
  return lScale
    .map((l) => z(h, s, l, a))
    .map((color, index) => {
    return `--sl-color-${name}-${colorScale[index]}: ${color};\n`;
  });
}
/**
 * Generated a Shoelace color scale css string from a base color
 *
 * @param color
 * @param name
 * @returns
 */
function autoColorScaleCss(color, name = "primary") {
  return generateScale(color, name).join("\n");
}

export { autoColorScaleCss as a };
