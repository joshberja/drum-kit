var drumElements = document.querySelectorAll(".drum");

// --- FOR LOOP - DETECTING BUTTON PRESS ---
numberOfDrumButtons = drumElements.length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  drumElements[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    console.log("buttonInnerHTML: " + buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// --- DETECTING KEYBOARD PRESS ---

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  console.log("Key: " + event.key);
  buttonAnimation(event.key);
});

// Function to wrap the switch

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1Sound = new Audio("./sounds/tom-1.mp3");
      tom1Sound.play();
      break;
    case "a":
      var tom2Sound = new Audio("./sounds/tom-2.mp3");
      tom2Sound.play();
      break;
    case "s":
      var tom3Sound = new Audio("./sounds/tom-3.mp3");
      tom3Sound.play();
      break;
    case "d":
      var tom4Sound = new Audio("./sounds/tom-4.mp3");
      tom4Sound.play();
      break;
    case "j":
      var snareSound = new Audio("./sounds/snare.mp3");
      snareSound.play();
      break;
    case "k":
      var crashSound = new Audio("./sounds/crash.mp3");
      crashSound.play();
      break;
    case "l":
      var kickBassSound = new Audio("./sounds/kick-bass.mp3");
      kickBassSound.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);
}