const myNumber = (number) => {
  if (typeof number !== 'number') return 'O valor deve ser um número'

  switch (true) {
    case number > 0: return 'positivo'
    case number < 0: return 'negativo'
    case number === 0: return 'neutro'
    default: return undefined;
  }
}

module.exports = myNumber;