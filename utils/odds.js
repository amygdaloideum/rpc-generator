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

module.exports = { percent, oneToHundred, randomEl, randomInt };
