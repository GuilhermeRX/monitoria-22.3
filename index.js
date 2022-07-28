const fs = require('fs').promises;
const rl = require('readline-sync');

const file = './products.json'
const option1 = '1 - Cadastrar novo produto'
const option2 = '2 - Remover um produto'

const readProducts = async () => {
  const products = await fs.readFile(file, 'utf-8');
  return JSON.parse(products);
}

const createProduct = async () => {
  const nome = rl.question('Nome do Produto que deseja cadastrar ? \n ')

  // Lendo o arquivo ./products que já retorna um objeto javascript
  const arrProducts = await readProducts()
  // Pegando o index do ultimo objeto do array de produtos;
  const lastIndex = arrProducts.length

  // Criando um novo produto
  const newProduct = {
    id: arrProducts.length === 0 ? 1 : lastIndex + 1,
    name: nome,
  }

  // Adicionando o novo produto ao array
  arrProducts.push(newProduct);

  //Escrevendo no arquivo ./products e cadastrando o novo produto
  await fs.writeFile(file, JSON.stringify(arrProducts))

  console.log(`${nome} cadastrado com sucesso!`)
}

const removeProduct = async () => {
  const nome = rl.question('Nome do Produto que deseja remover ? \n')

  // Lendo o arquivo ./products que já retorna um objeto javascript
  const arrProducts = await readProducts();
  // Fazendo um filtro que retorna produtos que não incluem o nome recebido.
  const filter = arrProducts.filter((product) => product.name !== nome)

  // Escrendo no arquivo ./products e removendo o produto da lista
  await fs.writeFile(file, JSON.stringify(filter))
  console.log('Produto removido com sucesso !')
}

const main = () => {
  const option = rl.questionInt(`Oque você deseja fazer ?\n ${option1} \n ${option2} \n`)

  switch (option) {
    case 1: return createProduct();
    case 2: return removeProduct();
    default: undefined
  }
}

main();