const { randomEl, randomStack } = require('../../utils/odds');
const { getRandomSpecies } = require('../../utils/species-helper');

function getFPParticipantString({ beings, firstPerson }) {
  return beings.length === 1
    ? 'you '
    : `you ${beings.filter(being => being.id !== firstPerson.id).map(coBeing => `and ${coBeing.name} `).join('')}`;
}

function murderWitness(beings) {
  const stack = new randomStack(beings);
  const victim = randomEl(['horse', 'child', 'prostitute', 'chimpanzee', 'dog', getRandomSpecies().name]);
  const perp = stack.pick(1);
  const witnesses = stack.pickRandomNumberOfElemets();
  perp.relations.push(`you once killed a ${victim}, but no one knows about it`);
  witnesses.forEach(witness => {
    const observers = getFPParticipantString({ beings: witnesses, firstPerson: witness });
    witness.relations.push(`${observers}once saw ${perp.name} commit a murder on a ${victim}, without being noticed.`);
  });
}

module.exports = {
  list: [
    murderWitness,
  ],
  murderWitness,
};