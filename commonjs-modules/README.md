## Explicativo completo em **formato Markdown** sobre a pasta `commonjs-modules`, incluindo:

- Tópicos e sub-tópicos por subpasta
- Interpretação dos comentários nos códigos
- Estrutura clara e bem formatada
- Considerações finais no fim

---

# 📦 Documentação da pasta `commonjs-modules`

Este documento tem como objetivo explicar o conteúdo da pasta `commonjs-modules` do repositório [gcmassa/Node](https://github.com/gcmassa/Node.git), abordando os conceitos fundamentais do sistema de módulos CommonJS no Node.js. Cada subpasta representa um aspecto importante dessa arquitetura, e os comentários nos arquivos ajudam a entender o funcionamento interno de cada recurso.

---

## 📁 Estrutura da pasta


commonjs-modules/
├── 01-global-objects
├── 02-module-exports
├── 03-require
├── 04-built-in-modules


---

## 1️⃣ `01-global-objects`

### 🔹 Objetivo
Explorar os objetos globais disponíveis no ambiente Node.js.

### 🔸 Arquivo principal
- `global-objects.js`

### 🧠 Conceitos abordados
- `__dirname`: Retorna o diretório atual do arquivo.
- `__filename`: Retorna o caminho completo do arquivo atual.
- `global`: Objeto global do Node.js, equivalente ao `window` no navegador.

### 💬 Comentários relevantes
- Demonstração de como variáveis declaradas com `var` podem ser acessadas via `global`.
- Observação de que variáveis com `let` ou `const` não são adicionadas ao escopo global.

---

## 2️⃣ `02-module-exports`

### 🔹 Objetivo
Mostrar como exportar funcionalidades de um módulo usando `module.exports`.

### 🔸 Arquivos
- `math.js`: Define funções matemáticas (`add`, `subtract`, etc.).
- `index.js`: Importa e utiliza as funções exportadas.

### 🧠 Conceitos abordados
- `module.exports`: Permite exportar objetos, funções ou valores.
- Organização de código em módulos reutilizáveis.

### 💬 Comentários relevantes
- Explicação sobre como cada função é adicionada ao objeto `exports`.
- Demonstração de como importar e usar os métodos em outro arquivo.

---

## 3️⃣ `03-require`

### 🔹 Objetivo
Demonstrar o uso do `require()` para importar módulos.

### 🔸 Arquivos
- `logger.js`: Define uma função de log.
- `index.js`: Importa e utiliza o `logger`.

### 🧠 Conceitos abordados
- `require()`: Função usada para importar módulos.
- Cache de módulos: Um módulo é carregado uma única vez e reutilizado.

### 💬 Comentários relevantes
- Explicação sobre como o Node resolve caminhos de módulos.
- Observação sobre o comportamento de cache do `require`.

---

## 4️⃣ `04-built-in-modules`

### 🔹 Objetivo
Explorar módulos nativos do Node.js.

### 🔸 Arquivos
- `fs-example.js`: Demonstra uso do módulo `fs` para leitura e escrita de arquivos.
- `path-example.js`: Usa o módulo `path` para manipulação de caminhos.
- `os-example.js`: Exibe informações do sistema operacional com o módulo `os`.

### 🧠 Conceitos abordados
- `fs`: File System – leitura e escrita de arquivos.
- `path`: Manipulação segura de caminhos.
- `os`: Informações sobre o sistema (CPU, memória, etc.).

### 💬 Comentários relevantes
- Uso de métodos síncronos (`readFileSync`, `writeFileSync`) para simplificar exemplos.
- Demonstração de como montar caminhos com `path.join`.
- Exibição de dados como tipo de sistema, tempo de atividade e número de CPUs.

---

## ✅ Considerações finais

A pasta `commonjs-modules` oferece uma introdução sólida ao sistema de módulos CommonJS, que é a base da modularização em Node.js. Os exemplos são simples, bem comentados e cobrem:

- Objetos globais do ambiente Node
- Exportação e importação de módulos personalizados
- Uso de `require()` e comportamento de cache
- Aplicação de módulos nativos para tarefas comuns

Esses conceitos são essenciais para qualquer desenvolvedor que esteja começando com Node.js e deseja escrever código organizado, reutilizável e escalável.

---
