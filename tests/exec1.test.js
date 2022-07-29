const { expect } = require("chai");
const myNumber = require("../exec1");

describe('Verifica se ao chamar a função retorna o resultado esperado', function () {
  describe('Verifica a função myNumber', function () {
    it('Verifica se a função retorna negativo', function () {
      const message = myNumber(-20);
      expect(message).to.be.equals('negativo');
    })

    it('Verifica se a função retorna positivo', function () {
      const message = myNumber(20);
      expect(message).to.be.equals('positivo');
    })

    it('Verifica se a função retorna neutro', function () {
      const message = myNumber(0);
      expect(message).to.be.equals('neutro');
    })

    it('Verifica se a função retorna "O valor deve ser um numero"', function () {
      const message = myNumber('a');
      expect(message).to.be.equals('O valor deve ser um numero');
    })
  })
})