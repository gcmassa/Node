# 📁 Explicativo da pasta `esm-modules/src` e subpasta `utils`

Este diretório demonstra como estruturar e utilizar **ES Modules (ECMAScript Modules)** no Node.js. Os arquivos contêm funções simuladas e constantes utilitárias, com comentários que explicam boas práticas de exportação, importação e organização modular.

---

## 📂 Estrutura de Arquivos

```plaintext
src/
├── index.js
└── utils/
    ├── api.js
    ├── database.js
    └── database.mjs
```

---

## 📄 1. `src/index.js`

Este é o ponto de entrada do módulo. Ele demonstra diferentes formas de importar funcionalidades de outros arquivos:

- **Importação total**: `import * as database` importa todas as exportações como um objeto.
- **Importação seletiva**: `import { disconnectDatabase, dataBaseType }` usa destructuring para acessar diretamente funções específicas.
- **Importação direta**: `import { getDataFromApi }` importa uma função específica de outro módulo.

### 🔹 Comentários relevantes
- Explicam que ao usar ESM, é necessário informar o caminho completo do arquivo `.mjs` para que o Node.js o reconheça como módulo.
- Destacam o uso de destructuring como recurso para importar funções diretamente.

### 🔹 Funções chamadas
- `getDataFromApi()` — busca simulada de dados via API.
- `database.connectToDatabase("my-database")` — conexão simulada com banco.
- `database.disconnectDatabase()` — desconexão via namespace.
- `disconnectDatabase()` — desconexão via destructuring.

---

## 📄 2. `utils/api.js`

Este módulo contém:

- `key`: objeto exportado diretamente, com dados simulados de autenticação.
- `getDataFromApi`: função que imprime `"dados da api sendo buscados..."`.

### 🔹 Comentários relevantes
- Explicam que a exportação está sendo feita diretamente no momento da declaração.
- Mostram que a função está armazenada em uma constante antes de ser exportada.
- Apontam uma alternativa de exportação default (`export default key`), comentada para fins didáticos.

---

## 📄 3. `utils/database.js`

Este módulo contém:

- `dataBaseType`: objeto com informações sobre tipo de usuário e tipo de dados.
- `connectToDatabase`: função assíncrona que simula conexão com banco.
- `disconnectDatabase`: função assíncrona que simula desconexão.

### 🔹 Comentários relevantes
- Explicam que as funções e constantes estão sendo exportadas em conjunto.
- Mostram como seria a exportação via CommonJS (`module.exports`), comentada como referência.
- Destacam que a estrutura é voltada para modularidade e reutilização.

---

## 📄 4. `utils/database.mjs`

Este módulo contém:

- `connectToDatabase`: mesma função de conexão simulada, mas exportada como **default**.
- A extensão `.mjs` garante que o Node.js trate o arquivo como **ES Module**, mesmo sem `"type": "module"` no `package.json`.

### 🔹 Comentários relevantes
- Explicam que o arquivo representa uma versão ESM explícita.
- Mostram a exportação default como alternativa à exportação nomeada.

---

## 🧠 Conclusão Geral

A estrutura `esm-modules/src` e sua subpasta `utils` demonstram:

- Diferentes formas de exportar e importar módulos com ES Modules.
- Uso de comentários para orientar boas práticas e mostrar alternativas (como CommonJS vs. ESM).
- Modularização clara e didática, com funções simuladas para API e banco de dados.
- Flexibilidade entre exportações nomeadas e default, além do uso explícito de `.mjs`.

Este projeto é ideal para quem está aprendendo a organizar aplicações Node.js com ES Modules, e serve como base sólida para evoluir para implementações reais.

