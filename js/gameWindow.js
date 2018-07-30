/*
Handles all gameplay, checks if input is valid solution, adds solution to list
of answers, saves players progress as it goes.
*/

// get data for the current level and all levels
var levelNum = localStorage.getItem('currentLevel');
var levelData = JSON.parse(localStorage.getItem('levelData'));
var data = levelData[levelNum];

//set up the word for the level
document.getElementById('anagram').innerText = data.anagram.toUpperCase();


//set up table of possible words with different amount letters for the level
var list = document.getElementById('words');
for (let i = 0; i < data.numWordsWithLetters.length; i++){
  var numWords = data.numWordsWithLetters[i];
  if (numWords != 0){
    var innerList = document.createElement('li');
    innerList.className = 'list-group-item';
    innerList.innerText = i + ' Letter Words';
    list.appendChild(innerList);
    var letterList = document.createElement('ul');
    letterList.className = 'list-group';
    letterList.id = "letters"+i
    // create empty list element for every possible word
    for (let j = 0; j < numWords; j++){
      var item = document.createElement('li');
      item.className = "list-group-item bg-light";
      item.innerText = "?";
      letterList.appendChild(item);
    }
    innerList.appendChild(letterList);
  }
}

// load previous progress (words done and progress bar)
for (let i = 0; i<data.wordsDone.length;i++){
  // add to HTML
  addWordToDone(data.wordsDone[i])
}

// event listener for input (user inputs words that are made up of letters of
// main word on top) and activated when enter is pressed
document.getElementById("inputField").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      var input = document.getElementById('inputField').value.toLowerCase();
      if(validWord(input)) {
        // add to current level data
        data.wordsDone.push(input);
        // add to HTML
        addWordToDone(input)
        // clear input when button clicked or enter pressed
        document.getElementById("inputField").value = "";
      }
    }
});

// if reset is pressed then reload the page (clear all inputted words)
document.getElementById("reset").addEventListener('click', function(){
  location.reload();
  data.wordsDone = [];
  localStorage.setItem('levelData', JSON.stringify(levelData));
  console.log("reset button pressed")
});


//if reset pressed then reset the anagram word to default
document.getElementById("resetWord").addEventListener('click', function(){
  var a = document.getElementById('anagram');
  a.innerText = data.anagram.toUpperCase();
});


//if shuffle is pressed then jumble up the characters of anagram
// https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
document.getElementById("shuffleWord").addEventListener('click', function () {
  var a = document.getElementById('anagram');
  var shuffled = a.innerText.split('').sort(function(){return 0.5-Math.random()}).join('');
  a.innerText = shuffled;
});




// add valid word to wordsDone and prints it in the row corresponding to num of letters
function addWordToDone(text){
  var letterList = document.getElementById('letters'+text.length);
  // put word at end of list of words (preserving the amount of nodes in list by
  // replacing an empty one with the word)
  var item = document.createElement('li');
  item.className = "list-group-item bg-success text-light";
  item.innerText = text.toUpperCase();
  letterList.insertBefore(item, letterList.childNodes[0]);
  letterList.removeChild(letterList.childNodes[letterList.childNodes.length-1])
}

// check word hasn't already been done and is in possible words
function validWord(word){
  if (data.wordsDone.indexOf(word) == -1 && data.wordsPossible.indexOf(word) > -1){
    return true;
  }
  return false;
}

// ------------------------------------------- this means data only saves when user presses level menu ---- change so it auto saves all the time?? ------------
// when go back to level menu, update local storage with current progress on level
document.getElementById("levelsMenu").addEventListener('click', function(){
  // update current levels data
  levelData[data.levelNum] = data;
  // put back in local storage
  localStorage.setItem('levelData', JSON.stringify(levelData));
});
