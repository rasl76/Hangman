let words = [
  "witch",
  "broomstick",
  "cat",
  "haunted",
  "ghost",
  "spell",
  "pumpkin",
  "mystery",
  "bat",
  "cat",
  "cobweb",
  "nightmare",
  "candy",
  "werewolf",
  "spooky",
  "cauldron",
  "mummy",
  "spider",
  "creepy",
  "scary",
  "scarecrow",
  "crow",
  "ogre",
  "sorcery",
  "monster",
  "magic",
  "moon",
  "boo",
  "zombie",
  "vampire",
  "crypt",
  "seance",
  "paranormal",
  "howl",
  "tombstone",
  "cemetery",
];
let misses = 0;
let correctGuesses = 0;
let currentWordArray = [];
let guessedLetters = [];
let magicArray = [];
let keyboard = document.querySelector(".keyboard");
let startButton = document.querySelector(".playbutton");
let playAgain = document.querySelector(".playAgain");
let textBox = document.querySelector(".textbox");
let guessingBox = document.querySelector("#guessing-box");
let keys = document.querySelectorAll("input");
let base = document.querySelector(".base");
let lost = document.querySelector(".lost");
let won = document.querySelector(".won");
let post = document.querySelector(".post");
let beam = document.querySelector(".beam");
let hanger = document.querySelector(".hanger");
let head = document.querySelector(".head");
let body = document.querySelector(".body");
let arm1 = document.querySelector(".arm1");
let arm2 = document.querySelector(".arm2");
let leg1 = document.querySelector(".leg1");
let leg2 = document.querySelector(".leg2");

startButton.addEventListener("click", playClick);
function playClick() {
  // hide play button
  if (currentWordArray.length == 0) {
    wordSelector(words);
    displayCross();
    startButton.style.display = "none";
    // keyboard.style.display = "block";
    keys = Array.from(keys);
    // console.log(keys);
    keys.forEach((key) => {
      key.addEventListener("click", handleClick);
    });
  } else {
    keys = Array.from(keys);
    // console.log(keys);
    keys.forEach((key) => {
      key.addEventListener("click", handleClick);
    });
    // div = guessing-box
    magicArray = [];
    guessingBox.innerHTML = "";
    wordSelector(words);
    displayCross();
    correctGuesses = 0;
    guessedLetters = [];
    misses = 0;
    lost.style.display = "none";
    won.style.display = "none";
    head.style.display = "none";
    body.style.display = "none";
    arm1.style.display = "none";
    arm2.style.display = "none";
    leg1.style.display = "none";
    leg2.style.display = "none";
    startButton.style.display = "none";
    for (let key of keys) {
      key.classList.remove("disabled");
    }
  }
}
function displayCross() {
  base.style.display = "block";
  post.style.display = "block";
  beam.style.display = "block";
  hanger.style.display = "block";
}
function handleClick(evt) {
  let currentKey = evt.target.value.toLowerCase();
  evt.target.classList.add("disabled");
  evt.target.removeEventListener("click", handleClick);
  guessedLetters.push(currentKey);
  // remove.eventlistener conditionally.
  console.log("currentWordArray", currentWordArray);
  if (currentWordArray.includes(currentKey)) {
    // for each id seeing if it has a class matching the currentKey
    for (let i = 0; i < magicArray.length; i++) {
      console.log("magicArray", magicArray[i]);
      if (magicArray[i].classList.contains(currentKey.toLowerCase())) {
        console.log(currentKey);
        magicArray[i].innerText = currentKey;
        correctGuesses++;
        if (correctGuesses == magicArray.length) {
          console.log("correct guesses", correctGuesses);
          won.style.display = "block";
          startButton.style.display = "block";
          startButton.innerText = "Play Again";
          evt.target.classList.remove("disabled");
        }
      }
    }
    console.log("correct", correctGuesses);
  } else {
    misses = misses + 1;
    console.log("misses", misses);
    if (misses == 1) {
      head.style.display = "block";
    } else if (misses == 2) {
      body.style.display = "block";
    } else if (misses == 3) {
      arm1.style.display = "block";
    } else if (misses == 4) {
      arm2.style.display = "block";
    } else if (misses == 5) {
      leg1.style.display = "block";
    } else {
      leg2.style.display = "block";
      lost.style.display = "block";
      startButton.style.display = "block";
      startButton.innerText = "Play Again";
      evt.target.classList.remove("disabled");
    }
  }
}

function wordSelector(words) {
  console.log("word selector");
  let currentWord = [Math.floor(Math.random() * words.length)];
  currentWord = words[currentWord];
  currentWordArray = currentWord.split("");
  console.log(currentWordArray);
  addElements(currentWord.length);
}

function addElements(numberOfLetters) {
  for (let i = 0; i < numberOfLetters; i++) {
    let space = document.createElement("div");
    space.setAttribute("class", "guess-box");
    space.setAttribute("id", i);
    space.classList.add(currentWordArray[i]);
    console.log(space);
    magicArray.push(space);
    guessingBox.appendChild(space);
  }
}
