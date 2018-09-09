const { randomEl } = require('../utils/odds');
const { list: singleRelations } = require('../data/relations/single');
const { list: multipleRelations } = require('../data/relations/multiple');

function generateRelations({
  beings,
  config: { singlesPerBeing = 2, randomSingles = 5, pairs = 2, multiple = 2 } = {},
}) {
  if (singlesPerBeing > 0) {
    beings.forEach(being => randomEl(singleRelations)(being, beings));
  }

  if (randomSingles > 0) {
    [...Array(randomSingles)].forEach(() => randomEl(singleRelations)(randomEl(beings), beings));
  }

  if (multiple > 0) {
    [...Array(multiple)].forEach(() => randomEl(multipleRelations)(beings));
  }
}

module.exports = {
  generateRelations,
};
