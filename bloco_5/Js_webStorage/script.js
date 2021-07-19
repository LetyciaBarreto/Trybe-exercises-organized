window.onload = function() {
  function setBackgroundColor(color) {
    const content = document.querySelector('.content');
    content.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
}
function setFontColor(color) {
  const paragraphs = document.querySelectorAll('.paragraph');
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.color = color;
  }
    localStorage.setItem("fontColor", color);
}
function setFontSize(size) {
  const paragraphs = document.querySelectorAll('.paragraph');
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.fontSize = size;
  }
  localStorage.setItem("fontSize", size);
}
function setFontHeight(height) {
  const paragraphs = document.querySelectorAll('.paragraph');
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.lineHeight = height;
  }
  localStorage.setItem("fontHeight", height);
}
function setFontFamily(family) {
  const paragraphs = document.querySelectorAll('.paragraph');
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.fontFamily = family;
  }
  localStorage.setItem("fontFamily", family);
}

const backgroundColorButton = document.querySelectorAll('#background-color>button');
for( let i = 0; i < backgroundColorButton.length; i++) {
  backgroundColorButton[i].addEventListener('click', (event) => {
    setBackgroundColor(event.target.innerHTML)
  })
}
const fontColorrButton = document.querySelectorAll('#font-color>button');
for( let i = 0; i < fontColorrButton.length; i++) {
  fontColorrButton[i].addEventListener('click', (event) => {
    setFontColor(event.target.innerHTML)
  })
}
const fontSizeButton = document.querySelectorAll('#font-size>button');
for( let i = 0; i < fontSizeButton.length; i++) {
  fontSizeButton[i].addEventListener('click', (event) => {
    setFontSize(event.target.innerHTML)
  })
}
const lineHeightButton = document.querySelectorAll('#line-height>button');
for( let i = 0; i < lineHeightButton.length; i++) {
  lineHeightButton[i].addEventListener('click', (event) => {
    setFontHeight(event.target.innerHTML)
  })
}
const fontFamilyButton = document.querySelectorAll('#font-family>button');
for( let i = 0; i < fontFamilyButton.length; i++) {
  fontFamilyButton[i].addEventListener('click', (event) => {
    setFontFamily(event.target.innerHTML)
  })
}
 function initialize() {
   let backgroundColor = localStorage.getItem("backgroundColor");
   if(backgroundColor) setBackgroundColor(backgroundColor);
   let fontColor = localStorage.getItem("fontColor");
   if(fontColor) setFontColor(fontColor);
  let fonteSize = localStorage.getItem("fonteSize");
 if(fonteSize) setFonteSize(fonteSize);
let lineHeight = localStorage.getItem("lineHeight");
if(lineHeight) setLineHeight(lineHeight);
let fontFamily = localStorage.getItem("fontFamily");
if(fontFamily) setFontFamily(fontFamily);
}
initialize()
  }
