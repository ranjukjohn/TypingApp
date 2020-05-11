let spanIndex = 0;
let totalWrongCount = 0;
let correctTypedText = [''];

document.addEventListener("keydown", function(event) {
  start();
  typedChar = event.key;
  var tempTextArray = textArray;

  spanElement = document.getElementById('spanId' + spanIndex);

  if ((!FINGERMAPPING.ignoreChars.includes(typedChar)) &&
    (spanIndex < textArray.length)) {
    console.log(event);
    console.log("The char is "+textArray[spanIndex]+" and its index is "+spanIndex);
    if ( typedChar == textArray[spanIndex] ) {
      correctTypedText = correctTypedText + textArray[spanIndex];
      console.log("The correctly entered text so far is " + correctTypedText);
      document.getElementById('typedText').innerHTML = correctTypedText.split('').map(colourText).join('');

      spanIndex++;
      if(spanIndex < textArray.length) {
        if(!(textArray[spanIndex] == ' ')) {
          document.getElementById('nextChar').innerHTML = colourText(textArray[spanIndex]);
        } else {
          document.getElementById('nextChar').innerHTML = colourText(' ');
        }
      } else {
        document.getElementById('nextChar').innerHTML = colourText(' ');
      }
    } else {
      totalWrongCount++;
      console.log("The wrong count is "+totalWrongCount);
    }
    if (spanIndex >= textArray.length) {
      end();
      localStorage.setItem("storageTypeText",tempTextArray.join(''));
      localStorage.setItem("storageTimeDiff",timeDiff);
      localStorage.setItem("storageTotalWrongCount",totalWrongCount);
      window.location.href="summaryPage.html"
    }
  }
})
