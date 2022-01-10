function playIt(e) {
  //get the elements
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //if there is no element with pressed keys data-key, return nothing.
  audio.currentTime = 0; //go back to beginning, so it can play all over again. kinda reset.
  audio.play(); //play the audio. play() method?
  key.classList.add('playing'); //append .playing class to the key element
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing'); //this -> key (because the function called inside the event listener)
}

//return an array with all elements that has .key class:
const keys = document.querySelectorAll('.key');
//append removeTransition function to all .key class elements:
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playIt);
