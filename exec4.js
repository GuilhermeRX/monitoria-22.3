const fs = require('fs').promises;

const write = async (name, conteudo) => {
  await fs.writeFile(name, conteudo);
  return 'ok';
};

module.exports = write;