# 📖 Documentação de APIs - Prática com JSDoc

Projeto prático desenvolvido para a disciplina de **Desenvolvimento de Aplicações Corporativas** do Curso de Tecnologia em Análise e Desenvolvimento de Sistemas (CSTADS) - IFRS Campus Bento Gonçalves.

O objetivo principal desta aplicação é demonstrar a construção de uma API RESTful utilizando **Node.js** e **Express**, aplicando boas práticas de separação de responsabilidades (MVC/Services) e implementando **documentação interna abrangente utilizando JSDoc**.

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript.
- **[Express](https://expressjs.com/pt-br/):** Framework para construção do servidor web e roteamento.
- **[JSDoc](https://jsdoc.app/):** Padrão de marcação e ferramenta para geração de documentação de código fonte JavaScript.

## ⚙️ Funcionalidades

- **Gerenciamento de Usuários:** API simulando um sistema CRUD (armazenamento de dados em memória) com listagem, busca por ID, criação e remoção de usuários.
- **Regras de Negócio Implementadas:**
  - Validação de formato de ID numérico.
  - Verificação de campos obrigatórios (nome e e-mail).
  - Bloqueio de cadastro para e-mails já existentes.
- **Documentação de Código:** Utilização intensiva de tags do JSDoc (`@param`, `@returns`, `@throws`, `@typedef`, `@example`, etc.) nos componentes do sistema (Models e Services).
- **Geração Automática de HTML:** Scripts configurados para compilar os comentários de código em um site estático e navegável contendo a documentação técnica.

## 📂 Estrutura do Projeto

```text
api-documentada/
├── requests/                # Testes de requisição HTTP (REST Client)
│   └── users.http
├── src/
│   ├── controllers/         # Interação com req/res e status HTTP
│   │   └── users.controller.js
│   ├── models/              # Estruturas de dados documentadas
│   │   └── user.model.js
│   ├── routes/              # Mapeamento de endpoints e rotas Express
│   │   └── users.routes.js
│   ├── services/            # Regras de negócio e array em memória documentados
│   │   └── users.service.js
│   └── app.js               # Configurações centrais do Express
├── jsdoc.json               # Configurações do compilador JSDoc
├── package.json             # Dependências e scripts NPM
└── server.js                # Arquivo de inicialização e porta do servidor
