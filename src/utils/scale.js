// let contentWidth = document.getElementsByTagName("body").style.width;
// let contentHeight = document.getElementsByTagName("body").style.height;
let contentWidth = 12000;
let contentHeight = 2430;
// let clientWidth = window.document.documentElement.clientWidth;
let clientHeight = window.document.documentElement.clientHeight;

let scaleNumber = Number((clientHeight - 17) / contentHeight).toFixed(4);
// transform: scale(${scaleNumber});transform-origin: left top;overflow-y:auto;overflow-x:auto;
document.getElementsByTagName(
  "body"
)[0].style.cssText = `width: ${contentWidth}px;height: ${contentHeight}px;`;
