const { ul5d6 } = require('../../utils/dice-roller');
const { percent, oneToHundred, randomEl, randomInt } = require('../../utils/odds');

module.exports = {
  name: 'robot',
  modifiers: {
    base: {
      strength: val => val,
      agility: val => val,
      intelligence: val => val,
      charisma: val => val - ul5d6(1),
      magic: val => (percent(90) ? 0 : val),
    },
    derived: {
      height: baseStats => 10,
      weight: baseStats => 10,
      age: baseStats => 10,
    },
  },
  nameGenerator,
  genders: ['male', 'female', 'N/A'],
  properties: [''],
};

function nameGenerator() {
  const nr = oneToHundred;
  if (nr < 10) {
    // generic robot name
    return randomEl(['unit', 'item', 'trashcan']) + randomInt(0, 999);
  }
  return 'robocop';
}
