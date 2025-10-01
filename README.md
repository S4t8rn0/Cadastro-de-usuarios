# Cadastro de Usuários (Monorepo)

Monorepo contendo:

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
- Banco de dados compatível com o `schema.prisma` (ex: PostgreSQL)

## ⚙️ Variáveis de Ambiente
Crie arquivos `.env` (não são commitados). Exemplos:

`API/.env`:
```
DATABASE_URL="postgresql://usuario:senha@host:5432/dbname?schema=public"
PORT=3000
CORS_ORIGIN=https://seu-front.vercel.app
```

`front/dev-cadastro-de-usuarios/.env`:
```
VITE_API_URL=http://localhost:3000
```
No deploy (Vercel), ajuste `VITE_API_URL` para a URL pública do backend.

## ▶️ Instalação & Desenvolvimento
Na raiz, instale cada parte (ainda sem workspaces):
```bash
# Backend
cd API
npm install

# Frontend
cd ../front/dev-cadastro-de-usuarios
npm install
```

### Rodar Backend em Dev
```bash
cd API
# (Opcional) aplicar migrations se existirem
npx prisma migrate dev
node server.js # (adicionar script start depois)
```

### Rodar Frontend em Dev
```bash
cd front/dev-cadastro-de-usuarios
npm run dev
```
Acesse: http://localhost:5173 (padrão Vite)

## 🛠 Endpoints Principais
```
POST   /usuarios        # cria usuário { name, email, age }
GET    /usuarios        # lista usuários (filtros name,email,age pendentes de uso)
PUT    /usuarios/:id    # atualiza usuário
DELETE /usuarios/:id    # remove usuário
```

## 🗄 Prisma
Gerar client (caso necessario):
```bash
cd API
npx prisma generate
```

Aplicar migrations em produção (Railway):
```bash
npx prisma migrate deploy
```

## ☁️ Deploy Sugerido
- Frontend: **Vercel** (root directory: `front/dev-cadastro-de-usuarios`, build: `npm run build`, output: `dist`)
- Backend: **Railway** (root directory: `API`, start command: `node server.js`)
- Variáveis de ambiente configuradas nos respectivos painéis.

## 🔐 CORS
Ajustar no `server.js` se quiser restringir:
```js
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))
```

## ✅ Próximas Melhorias
- Adicionar scripts em `API/package.json`: `"start": "node server.js"`, `"dev": "nodemon server.js"`.
- Implementar validação de entrada (Zod / Joi / express-validator).
- Paginação e filtros reais em `GET /usuarios`.
- Tratamento de erros centralizado (middleware).
- Testes automatizados (Jest / Vitest) e CI.
- Adicionar `README` específico para cada pacote (frontend + backend) se crescer.
- Configurar workspaces (npm ou pnpm) para instalar dependências na raiz.

## 📄 Licença
Projeto educacional. Ajuste para a licença que preferir.

---
Se precisar de ajuda com os scripts, CI ou deploy agora, abra uma issue ou peça aqui.
