
# 📦 Documentação da pasta `commonjs-modules/src`

Esta pasta contém um exemplo prático de modularização em Node.js utilizando o padrão **CommonJS**. Os arquivos estão organizados para demonstrar como importar, exportar e reutilizar funcionalidades entre módulos, com foco em clareza e boas práticas.

---

## 📁 Estrutura

```
src/
├── main.js
└── services/
    ├── config.js
    ├── database.js
    └── products.js
```

---

## 1️⃣ `main.js`

### 🎯 Propósito
Arquivo principal da aplicação, responsável por importar os módulos e executar a lógica central.

### 📄 Conteúdo e comentários
```js
const product = require("./services/products"); // importa o arquivo
const { getFullName, productType } = require("./services/products"); // importa algumas funções específicas do arquivo (destructuring)
const config = require("./services/config");
const database = require("./services/database");

async function main() {
  console.log("Carrinho compras!!!");

  getFullName("1", "teclado");
  product.getFullName("408", "mousepad");
  product.getFullName("508", "mouse");
  product.getProductLabel("mouse");

  //product.productType.version;
  database.connectToDataBase; // função padrão exportada

  console.log(config.devArea);
  console.log(config.client);
};

main();
```

### 💬 Destaques
- Usa `require()` para importar módulos completos e também com destructuring.
- Chama funções assíncronas como `getFullName` e `getProductLabel`.
- Acessa propriedades de configuração e simula uma chamada ao banco de dados.
- Comentários explicam claramente o propósito de cada importação e função.

---

## 2️⃣ `services/products.js`

### 🎯 Propósito
Agrupar todas as funções que lidam com produtos.

### 📄 Conteúdo e comentários
```js
// todas as funções que lidam com o produto
const productType = {
  version: "digital",
  tax: "x1",
};

async function getFullName(codeId, productName) {
  //console.log("\n");
  console.log("product: " + codeId + "--" + productName);
  await doBreakLine();
  //return codeId + "--" + productName;
};

//hidden const
const apiURL = {
  url: "www.google.com/api",
};

//hidden function
async function doBreakLine() {
  console.log("\n");
};

async function getProductLabel(productName) {
  console.log("Product " + productName);
};

// torna o arquivo exportável
module.exports = {
  getFullName,
  getProductLabel,
  productType,
};
```

### 💬 Destaques
- Comentário inicial define claramente o escopo do módulo.
- `getFullName` imprime o nome completo do produto e chama `doBreakLine()` para espaçamento.
- `getProductLabel` imprime uma etiqueta simples do produto.
- `productType` define metadados do produto.
- `apiURL` e `doBreakLine` são marcados como “hidden”, indicando que não são exportados.
- O `module.exports` torna as funções acessíveis em outros arquivos.

---

## 3️⃣ `services/config.js` (presumido com base no uso em `main.js`)

### 🎯 Propósito
Centralizar configurações da aplicação.

### 📄 Exemplo de conteúdo (deduzido)
```js
module.exports = {
  devArea: "Tecnologia",
  client: "Giancarlo Massa"
};
```

### 💬 Destaques
- Usado em `main.js` para exibir informações de ambiente e cliente.
- Facilita a manutenção de valores fixos e evita duplicação.

---

## 4️⃣ `services/database.js` (presumido com base no uso em `main.js`)

### 🎯 Propósito
Simular uma conexão com banco de dados.

### 📄 Exemplo de conteúdo (deduzido)
```js
module.exports = {
  connectToDataBase: () => {
    console.log("Conectando ao banco de dados...");
  }
};
```

### 💬 Destaques
- A função `connectToDataBase` é chamada em `main.js` (embora não executada diretamente).
- Representa uma abstração útil para futuras integrações reais com banco de dados.

---

## ✅ Conclusão

A pasta `commonjs-modules/src` demonstra com clareza como estruturar uma aplicação Node.js usando o padrão CommonJS. Os principais aprendizados incluem:

- 📦 Modularização com `require()` e `module.exports`
- 🧩 Separação de responsabilidades entre lógica, dados e configuração
- 💬 Comentários explicativos que facilitam o entendimento do código
- 🚀 Uso de funções assíncronas e organização em camadas

Esse exemplo é ideal para quem está aprendendo Node.js e deseja aplicar boas práticas desde o início. A estrutura modular torna o código mais limpo, reutilizável e fácil de escalar.

---

