const { ul5d6 } = require('../../utils/dice-roller');
const { percent, oneToHundred, randomEl, randomInt } = require('../../utils/odds');

module.exports = {
  name: 'elf',
  modifiers: {
    base: {
      strength: val => val - ul5d6(1),
      agility: val => val + ul5d6(1),
      intelligence: val => val,
      charisma: val => val,
      magic: val => val,
    },
    derived: {
      height: baseStats => 10,
      weight: baseStats => 10,
      age: baseStats => 10,
    }
  },
  nameGenerator,
  genders: [
    'male',
    'female',
  ]
}

function nameGenerator() {
  return 'legolas';
}