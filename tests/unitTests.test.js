const sinon = require('sinon');
const rl = require('readline-sync');
const fs = require('fs')
const { expect } = require('chai');
const { readProducts, createProduct, main, removeProduct } = require('..');

describe('Testes unitários', function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe('Function createProduct', function () {
    it('Testa se a função createProduct cria um novo produto', async function () {
      sinon.stub(rl, 'question').returns('Teclado Redragon')
      const message = await createProduct();

      expect(message).to.be.equal('Teclado Redragon cadastrado com sucesso!')
    })
  });

  describe('Function removeProduct', function () {
    it('Testa se a função removeProduct remove um produto', async function () {
      sinon.stub(rl, 'question').returns('Teclado Redragon')
      const message = await removeProduct();
      expect(message).to.be.equal('Produto removido com sucesso !')
    })
  })
});