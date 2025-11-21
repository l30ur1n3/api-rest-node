
---

# 📌 API RESTful com Node.js, Express, MongoDB, JWT e Swagger

Este projeto consiste em uma **API RESTful completa**, construída com **Node.js**, **Express**, **MongoDB**, autenticação via **JWT (JSON Web Token)** e documentação automática utilizando **Swagger**.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT (JSON Web Token)**
* **Swagger (Swagger UI + Swagger Autogen / OpenAPI)**
* **Dotenv**

---

## 📁 Estrutura de Pastas

```
📦 project
 ┣ 📂 src
 ┃ ┣ 📂 config
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 middlewares
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 docs
 ┃ ┗ server.js
 ┣ .env
 ┣ .gitignore
 ┣ package.json
 ┗ README.md
```

---

## 🔧 Instalação

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Criar arquivo `.env`

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/nome-do-banco
JWT_SECRET=seu_segredo_aqui
```

---

## ▶️ Executar a aplicação

### Modo desenvolvimento:

```bash
npm run dev
```

### Modo produção:

```bash
npm start
```

---

## 🔐 Autenticação JWT

A API utiliza **JWT** para autenticação.
O fluxo é:

1. Usuário faz login → recebe **token**
2. Endpoints protegidos usam **middleware** para validar o token
3. Token deve ser enviado no cabeçalho:

```http
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## 🗂 Endpoints Principais

### 🔸 Autenticação

| Método | Rota             | Descrição                |
| ------ | ---------------- | ------------------------ |
| POST   | `/auth/register` | Registra novo usuário    |
| POST   | `/auth/login`    | Login e geração de token |

### 🔸 Exemplo de recurso (User / Tasks / Products, etc.)

| Método | Rota         | Protegido | Descrição   |
| ------ | ------------ | --------- | ----------- |
| GET    | `/items`     | ✔️        | Lista itens |
| POST   | `/items`     | ✔️        | Cria item   |
| GET    | `/items/:id` | ✔️        | Detalhes    |
| PUT    | `/items/:id` | ✔️        | Atualiza    |
| DELETE | `/items/:id` | ✔️        | Remove      |

---

## 📘 Documentação da API — Swagger

Após iniciar o servidor, acesse:

```
http://localhost:3000/api-docs
```

A documentação é gerada automaticamente a partir do Swagger.

---

## 🧪 Testando com Insomnia / Postman

Você pode importar facilmente os endpoints usando o Swagger ou criando sua própria coleção no Postman/Insomnia.

---

## 🛠 Scripts Disponíveis

| Comando       | Descrição                               |
| ------------- | --------------------------------------- |
| `npm start`   | Inicia a API em produção                |
| `npm run dev` | Inicia com nodemon                      |
| `npm test`    | Execução de testes (caso implementados) |

---

## 📦 Banco de Dados

O projeto utiliza **MongoDB**.
Para rodar localmente, instale o MongoDB ou utilize o serviço **MongoDB Atlas**.

---

## 🧱 Padrões utilizados

* Arquitetura **MVC**
* Middlewares para autenticação
* Validação de dados
* Documentação com **OpenAPI 3.0**

---

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. Faça um **fork**
2. Crie uma branch:
   `git checkout -b minha-feature`
3. Commit:
   `git commit -m "Nova feature"`
4. Envie:
   `git push origin minha-feature`
5. Abra um **Pull Request**

---

## 📝 Licença

Este projeto está sob a licença **MIT**.
Sinta-se livre para usar e modificar.

---

