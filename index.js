const Being = require('./models/being');
const { generateRelations } = require('./services/relation-service');

const beings = [...Array(5)].map(() => new Being());

generateRelations({ beings });

console.log(beings);
