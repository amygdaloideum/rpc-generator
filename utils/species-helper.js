const { list } = require('../data/species');

function getRandomSpecies() {
  return list[Math.floor(Math.random() * list.length)];
}

module.exports = {
  getRandomSpecies,
}