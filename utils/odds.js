const autoBind = require('auto-bind');

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}

function percent(percent) {
  return Math.floor(Math.random() * 100) + 1 < percent;
}

function oneToHundred() {
  return Math.floor(Math.random() * 100) + 1;
}

function randomEl(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class randomStack {
  constructor(array) {
    this.array = shuffle(array.slice()); // Shallow copy array
    autoBind(this);
  }

  pick(n, alwaysReturnArray = false) { // Pick n random elements from array
    return (n <= 1 && !alwaysReturnArray) ? this.array.pop() : [...Array(n)].map(() => this.array.pop());
  }

  pickRest() { // Pick all the remaining elements
    return this.array;
  }

  pickRandomNumberOfElemets() {
    const n = randomInt(1, this.array.length);
    return this.pick(n, true);
  }
}

module.exports = { percent, oneToHundred, randomEl, randomInt, randomStack };
