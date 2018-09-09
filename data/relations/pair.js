const { randomEl } = require('../../utils/odds');

// A {insert relation} B
module.exports = [
  `{a} is secretly in love with {b}`,
  `{a} has slept with {b}\'s ${randomEl(['mother', 'father', 'sister', 'brother', 'grandfather'])}`,
  `{a} and {b} has casual sex regularly`,
];
