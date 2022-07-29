const fs = require('fs').promises;

const write = async (name, string) => {
  await fs.writeFile(name, string)
  return 'ok'
}

module.exports = write