const { expect } = require("chai");
const sinon = require('sinon');
const fs = require('fs').promises;
const write = require("../exec4");

describe('Verifica o funcionamento da função', function () {
  beforeEach(() => {
    sinon.restore();
  });

  describe('Testa a função "write"', function () {
    it('Verifica se o retorno é o esperado se a função for executada corretamente', async function () {
      sinon.stub(fs, 'writeFile').returns('ok')
      const result = await write('./testescommocha', 'mocha chai e sinon');
      expect(result).to.be.equals('ok');
    });
  });
});