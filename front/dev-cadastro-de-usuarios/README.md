# Cadastro de Usuários

Este projeto é uma aplicação web desenvolvida com **React** e **Vite** para cadastro e gerenciamento de usuários.

## Funcionalidades

- Cadastro de novos usuários
- Listagem de usuários cadastrados
- Edição e remoção de usuários
- Integração com API REST usando Axios

## Tecnologias Utilizadas

- React
- Vite
- Axios
- ESLint

## Como executar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
3. Acesse a aplicação no seu navegador: [http://localhost:5173](http://localhost:5173)

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
src
├── components
│   ├── UserForm.jsx
│   └── UserList.jsx
├── App.jsx
├── main.jsx
└── services
    └── api.js
```

- A pasta `components` contém os componentes reutilizáveis da aplicação.
- O arquivo `App.jsx` é o componente principal da aplicação.
- O arquivo `main.jsx` é o ponto de entrada da aplicação.
- A pasta `services` contém a configuração da API e funções para fazer requisições.

## ESLint

Este projeto utiliza o ESLint para garantir a qualidade e a consistência do código. Para verificar problemas de lint, execute:

```sh
npm run lint
```

Para corrigir automaticamente problemas de lint, execute:

```sh
npm run lint -- --fix
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
