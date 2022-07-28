const { expect } = require("chai")
const myNumber = require("../../exec1")

describe('Exercicio 1', function () {
  describe('Testa a função myNumber', function () {
    it('Se retorna o esperado se numero for positivo', function () {
      const result = myNumber(10);
      expect(result).to.be.equal('positivo')
    })

    it('Se retorna o esperado se numero for negativo', function () {
      const result = myNumber(-20);
      expect(result).to.be.equal('negativo')
    })

    it('Se retorna o esperado se numero for igual a 0', function () {
      const result = myNumber(0);
      expect(result).to.be.equal('neutro')
    })

    it('Se retorna o esperado se o parâmetro for uma string', function () {
      const result = myNumber('aaaa');
      expect(result).to.be.equal('O valor deve ser um número')
    })
  })
})