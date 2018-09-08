const { ul5d6 } = require('../utils/dice-roller');
const { getRandomSpecies } = require('../utils/species-helper');

class BaseStats {
  constructor({ modifiers }) {
    this.stength = modifiers.strength(ul5d6(3));
    this.agility = modifiers.agility(ul5d6(3));
    this.intelligence = modifiers.intelligence(ul5d6(3));
    this.charisma = modifiers.charisma(ul5d6(3));
    this.magic = modifiers.magic(ul5d6(3));
  }
}

class DerivedStats {
  constructor({ baseStats, modifiers }) {
    this.height = modifiers.height(baseStats);
    this.weight = modifiers.weight(baseStats);
    this.age = modifiers.age(baseStats);
  }
}

class Being {
  constructor() {
    this.id = '123';
    const speciesRef = getRandomSpecies();
    this.species = speciesRef.name;
    this.name = speciesRef.nameGenerator();
    this.baseStats = new BaseStats({ modifiers: speciesRef.modifiers.base });
    this.derivedStats = new DerivedStats({ modifiers: speciesRef.modifiers.derived });
  }
}

module.exports = Being;
