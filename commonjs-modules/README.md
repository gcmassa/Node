
# 📦 Projeto: CommonJS Modules – `src/`

Este diretório contém uma aplicação Node.js estruturada com o padrão de módulos **CommonJS**, demonstrando boas práticas de organização, reutilização de código e separação de responsabilidades.

---

## 📁 Estrutura do projeto

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

### 📌 Função
Arquivo principal da aplicação. Ele importa os módulos da pasta `services` e executa a lógica central.

### 📥 Importações esperadas
```js
const config = require('./services/config');
const db = require('./services/database');
const products = require('./services/products');
```

### 🚀 Exemplo de uso
```js
console.log(`Servidor rodando na porta ${config.PORT}`);

const lista = products.getAllProducts();
console.log('Produtos disponíveis:', lista);

const produto = products.getProductById(2);
console.log('Produto selecionado:', produto);
```

---

## 2️⃣ Pasta `services/`

### 🔸 `config.js`

#### 🎯 Propósito
Centraliza configurações da aplicação.

#### 📦 Exemplo de conteúdo
```js
module.exports = {
  PORT: 3000,
  DB_HOST: 'localhost',
  API_KEY: 'abc123'
};
```

---

### 🔸 `database.js`

#### 🎯 Propósito
Simula uma base de dados em memória.

#### 📦 Exemplo de conteúdo
```js
const products = [
  { id: 1, name: 'Teclado', price: 100 },
  { id: 2, name: 'Mouse', price: 50 },
  { id: 3, name: 'Monitor', price: 800 }
];

module.exports = products;
```

---

### 🔸 `products.js`

#### 🎯 Propósito
Gerencia operações relacionadas a produtos.

#### 📦 Exemplo de conteúdo
```js
const db = require('./database');

function getAllProducts() {
  return db;
}

function getProductById(id) {
  return db.find(p => p.id === id);
}

module.exports = {
  getAllProducts,
  getProductById
};
```

---

## ✅ Conclusão

Este projeto demonstra como utilizar o padrão **CommonJS** para modularizar uma aplicação Node.js. Os principais benefícios dessa abordagem são:

- 🔄 Reutilização de código
- 🧩 Separação de responsabilidades
- 🧠 Facilidade de manutenção
- 🚀 Escalabilidade para projetos maiores

A estrutura adotada aqui é ideal para quem está aprendendo Node.js e deseja aplicar boas práticas desde os primeiros projetos.

---



