import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors())


const users = [];

app.post('/usuarios', async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: Number(req.body.age)
    }
  });

  res.status(201).json(req.body)
});

app.get('/usuarios', async (req, res) => {
  const { name, email, age } = req.query;
  const where = {}

  if (name) where.name = name;
  if (email) where.email = email;
  if (age) where.age = Number(age);
 
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

app.put('/usuarios/:id', async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id
    },
    
    data: {
      email: req.body.email,
      name: req.body.name,
      age: Number(req.body.age)
    }
  });

  users.push(req.body);

  res.status(201).json(req.body)
});

app.delete('/usuarios/:id', async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id
    }
  });

  res.status(200).json({ message: 'Usuário deletado com sucesso!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});