let text = textArray.map(colourText).join('');

typeText.innerHTML = text;

document.getElementById('nextChar').innerHTML = colourText(firstChar[0]);
