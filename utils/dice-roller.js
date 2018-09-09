const rollDn = n => Math.floor(Math.random() * n) + 1;

const rollUlDn = (sides, ulnr) => {
  let result = rollDn(sides);
  if (result >= ulnr) {
    result = rollUlDn(sides, ulnr) + rollUlDn(sides, ulnr);
  }
  return result;
};

const diceFactory = ({ sides = 6, ulnr = 6 }) => n => {
  let result = 0;
  let i;
  for (i = 0; i < n; i++) {
    result += rollUlDn(sides, ulnr);
  }
  return result;
};

module.exports = {
  diceFactory,
  ul5d6: diceFactory({sides: 6, ulnr: 5}),
};
