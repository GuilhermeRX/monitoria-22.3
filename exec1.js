const myNumber = (number) => {
  switch (true) {
    case typeof number !== 'number': 'O valor deve ser um numero'
    case number > 0: return 'positivo'
    case number === 0: return 'neutro'
    case number < 0: return 'negativo'
    default: undefined;
  };
};

module.exports = myNumber;