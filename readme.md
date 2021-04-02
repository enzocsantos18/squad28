# Projeto Lapiseira - Squad 28
--
## Como instalar
Clone o projeto:
```bash
git clone https://github.com/enzocsantos18/squad28.git
```
- Baixe o [Node](https://nodejs.org/en/download/)
- Baixe o [Sql Server]

## Para rodar o backend
Navegue para a pasta /backend 
- Baixe as dependências do projeto utilizando o comando
``` npm install```
- Preencha o arquivo ormconfig.json
```
{
  "type": "mssql",
  "host": "", //Host do servidor mssql
  "port": 1433,
  "username": "", // Usuário do banco de dados
  "password": "", // Senha do banco de dados
  "database": "MateriaisDB",
  "logging": false,
  "entities": [
     "src/app/models/*.ts"
  ],
  "migrations": [
     "src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "src/database/migrations"
  }
}
```
- Crie um arquivo .env na raiz da pasta backend seguindo o padrão .env.example
 ``` 
    JWT_SECRET=    #Chave de segredo JWT
 ```
- Rode as migrations utilizando o comando:
`` 
npm run typeorm:run
``
Obs: Caso ocorra um erro na conexão com o banco confira novamente o arquivo ormconfig.json, caso o problema ainda sim continue, siga os passos dessa issue: https://github.com/typeorm/typeorm/issues/2133#issuecomment-615175431

## Para rodar o frontend
Navegue para pasta frontend
Instale as dependências:

```bash
npm install
```

Inicie o servidor:
```bash
npm run start
```

A aplicação abrirá automaticamente no seu navegador.

## Tecnologias utilizadas
--
### Backend
 - TypeORM
 - Express
### Frontend
 - ReactJS
