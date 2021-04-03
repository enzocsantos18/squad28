# Projeto Lapiseira - Squad 28
## Como instalar
Clone o projeto:
```bash
git clone https://github.com/enzocsantos18/squad28.git
```
- Baixe o [Node](https://nodejs.org/en/download/)
- Baixe o [Sql Server](https://go.microsoft.com/fwlink/?linkid=866662)
- Baixe o [Sql Server Management Studio](https://aka.ms/ssmsfullsetup)

## Configuração de ambiente
Siga os passos desse documento : https://www.notion.so/Configura-o-de-ambiente-3a046d9949484aeca4271c81b2088aa0

## Para rodar o backend
Navegue para a pasta /backend 
- Baixe as dependências do projeto utilizando o comando
``` npm install```
- Preencha o arquivo ormconfig.json
```
{
  "type": "mssql",
  "host": "localhost", //Host do servidor mssql
  "port": 1433,
  "username": "root", // Usuário do banco de dados
  "password": "root", // Senha do banco de dados
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
    JWT_SECRET=[INSIRA UMA PALAVRA QUALQUER]   #Chave de segredo JWT
 ```
- Rode as migrations utilizando o comando:
`` 
npm run typeorm:run
``
- Rode o projeto utilizando o comando:
`` 
npm run dev
``

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
### Backend
 - TypeORM
 - Express
### Frontend
 - ReactJS