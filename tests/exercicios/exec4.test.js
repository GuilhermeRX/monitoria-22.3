const write = require("../../exec4")
const sinon = require('sinon');
const fs = require('fs').promises;
const { expect } = require("chai");

describe('Exercicio 4', function () {
  beforeEach(function () {
    sinon.restore();
  });
  describe('Testa a função write', function () {
    it('Testa se passando os parâmetros corretos tem o retorno esperado', async function () {
      sinon.stub(fs, 'writeFile');
      const result = await write('./seujorge', 'olamoça')
      expect(result).to.be.equal('ok')
    })

    it('Testa se o retorno é uma string', async function () {
      sinon.stub(fs, 'writeFile');
      const result = await write('./seujorge', 'olamoça')
      expect(typeof result).to.be.equal('string')
    })
  })
})