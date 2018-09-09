const uuid = require('uuid/v4');
const { ul5d6 } = require('../utils/dice-roller');
const { getRandomSpecies } = require('../utils/species-helper');

class BaseStats {
  constructor({ modifiers, baseRoll }) {
    this.stength = modifiers.strength(baseRoll());
    this.agility = modifiers.agility(baseRoll());
    this.intelligence = modifiers.intelligence(baseRoll());
    this.charisma = modifiers.charisma(baseRoll());
    this.magic = modifiers.magic(baseRoll());
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
    this.id = uuid();
    const speciesRef = getRandomSpecies();
    this.species = speciesRef.name;
    this.name = speciesRef.nameGenerator();
    this.baseStats = new BaseStats({ modifiers: speciesRef.modifiers.base, baseRoll: () => ul5d6(3) });
    this.derivedStats = new DerivedStats({ modifiers: speciesRef.modifiers.derived });
    this.relations = [];
  }
}

module.exports = Being;
