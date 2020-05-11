const FINGERMAPPING = {
  leftPinky : ['~', '`', '1', '!', '\t', 'Q', 'q', 'A', 'a', 'Z', 'z'],
  leftRing : ['2', '@', 'W', 'w', 'S', 's', 'X', 'x'],
  leftMiddle : ['3', '#', 'E', 'e', 'D', 'd', 'C', 'c'],
  leftPointy : ['4', '$', '5', '%', 'R', 'r', 'T', 't', 'F', 'f', 'G', 'g', 'V', 'v', 'B', 'b'],
  thumb : [' '],
  rightPointy : ['6', '^', '7', '&', 'Y', 'y', 'U', 'u', 'H', 'h', 'J', 'j', 'N', 'n', 'M', 'm'],
  rightMiddle : ['8', '*', 'I', 'i', 'K', 'k', '<', ','],
  rightRing : ['9', '(', 'O', 'o', 'L', 'l', '>', '.'],
  rightPinky : ['0', ')', '_', '-', '+', '=', 'P', 'p', '{', '[', '}', ']', '|', '\\', ':', ';', '"', '\'', '\n', '?', '/'],
  ignoreChars : ['Tab', 'CapsLock', 'Shift', 'Control', 'OS', 'Alt', 'Enter', 'ContextMenu']
};

let i = 0;
let typeText = document.getElementById('typeText');
let textArray = typeText.innerHTML.split('');

let firstChar = document.getElementById('nextChar').innerHTML.split('');

function colourText(el) {
  typeTextElement = '<span id="spanId' + i + '" style="font-weight: bold;">' + el + '</span>';

  if(FINGERMAPPING.leftPinky.includes(el)) {
    typeTextElement = '<span id="spanId' + i + '" style="color:red; font-weight: bold;">' + el + '</span>';
  } else if(FINGERMAPPING.leftRing.includes(el)) {
    typeTextElement = '<span id="spanId' + i + '" style="color:orange; font-weight: bold;">' + el + '</span>';
  } else if(FINGERMAPPING.leftMiddle.includes(el)) {
    typeTextElement = '<span id="spanId' + i + '" style="color:yellow; font-weight: bold;">' + el + '</span>';
  } else if(FINGERMAPPING.leftPointy.includes(el)) {
    typeTextElement = '<span id="spanId' + i + '" style="color:green; font-weight: bold;">' + el + '</span>';
  } else if(FINGERMAPPING.thumb.includes(el)) {
    typeTextElement = '<span id="spanId' + i + '" style="background-color:grey; font-weight: bold;">' + '&nbsp;' + '</span>';
  } else if(FINGERMAPPING.rightPointy.includes(el)) {
    typeTextElement = '<span id="spanId' + i + '" style="color:aqua; font-weight: bold;">' + el + '</span>';
  } else if(FINGERMAPPING.rightMiddle.includes(el)) {
    typeTextElement = '<span id="spanId' + i + '" style="color:blue; font-weight: bold;">' + el + '</span>';
  } else if(FINGERMAPPING.rightRing.includes(el)) {
    typeTextElement = '<span id="spanId' + i + '" style="color:violet; font-weight: bold;">' + el + '</span>';
  } else if(FINGERMAPPING.rightPinky.includes(el)) {
    typeTextElement = '<span id="spanId' + i + '" style="color:pink; font-weight: bold;">' + el + '</span>';
  }
  i++;

  return typeTextElement;
}

var startTime, endTime, timeDiff;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}
