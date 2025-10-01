# Cadastro de Usuários

Contendo:

- **API**: Backend em Node.js (Express + Prisma) para CRUD de usuários.
- **front/dev-cadastro-de-usuarios**: Frontend em React + Vite consumindo a API.

## 🗂 Estrutura
```
API/
  server.js
  package.json
  prisma/
    schema.prisma
front/
  dev-cadastro-de-usuarios/
    src/
      pages/Home/
      services/api.js
    package.json
```

## 🚀 Tecnologias
Backend: Express 5, Prisma Client, CORS
Frontend: React 19, Vite, Axios

## 🔧 Requisitos
- Node.js 18+ (recomendado LTS)
- Banco de dados compatível com o `schema.prisma`

## 🛠 Endpoints Principais
```
POST   /usuarios        # cria usuário { name, email, age }
GET    /usuarios        # lista usuários (filtros name,email,age pendentes de uso)
PUT    /usuarios/:id    # atualiza usuário
DELETE /usuarios/:id    # remove usuário
```

## 📄 Licença
Projeto educacional.