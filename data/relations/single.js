const { randomEl } = require('../../utils/odds');
const { getRandomSpecies } = require('../../utils/species-helper');

// A {insert relation} B
module.exports = {
  list: [
    (being, beings) => {
      const victim = randomEl(['horse', 'child', 'prostitute', 'chimpanzee', 'dog', getRandomSpecies().name]);
      being.relations.push(`you once killed a ${victim}, but no one knows about it`);
    },
  ],
};
