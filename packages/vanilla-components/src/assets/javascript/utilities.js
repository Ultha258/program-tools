/////////////////////////////////////
//////                           ////
/////  Color Utility Functions  /////
////                           //////
/////////////////////////////////////

const cutHex = (hex) => {
  return (hex.charAt(0) == "#") ? hex.substring(1) : hex;
}

const cutRgb = (rgb) => {
  return (rgb.substring(4, rgb.length - 1))
}

const hexToRgb = (hex) => {
  const noHex = cutHex(hex);
  const r = parseInt(noHex.substring(0, 2), 16);
  const g = parseInt(noHex.substring(2, 4), 16);
  const b = parseInt(noHex.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`
}

const isHex = (string) => {
  return !!string.match(/^#[0-9a-f]{6}$/i);
}

const isRgb = (string) => {
  const rgbArray = cutRgb(string).split(", ");
  if (rgbArray.length !== 3) return false;
  return rgbArray.every((x) => parseInt(x) >= 0 && parseInt(x) <= 255)
}

const shadeColor = (color, percent) => {
  if (!isHex(color) && !isRgb(color)) return;
  const rgb = (isHex(color)) ? hexToRgb(color) : color;
  const decimalPercent = percent / 100;
  const shadedArray = cutRgb(rgb).split(", ").map((n) => { return Math.floor(parseInt(n) * (1 - decimalPercent))})
  return `rgb(${shadedArray.join(", ")})`
}

/////////////////////
//////           ////
/////  Exports  /////
////           //////
/////////////////////

export { shadeColor }