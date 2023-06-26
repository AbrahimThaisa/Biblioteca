# Especificação de Requisitos
**RF** => Requisitos funcionais

**RNF** => Requisitos não funcionais

**RN** => Regra de negócio

## Cadastrar tipo de serviço 
**RF**
- [x] Deve ser possível cadastrar um novo tipo de serviço

**RN**
- [x] Não deve ser possível cadastrar um tipo de serviço com o mesmo nome de um existente.

## Listagem tipo de serviço
**RF**
- [x] Deve ser possível listar todos os tipos de serviço existentes

## Editar tipo de serviço
**RF**
- [x] Deve ser possível editar o nome do tipo de serviço

**RN**
- [x] Não deve ser possível editar caso o tipo de serviço não exista.
- [x] Não deve ser possível editar um tipo de serviço com o mesmo nome de um existente.

## Excluir tipo de serviço
**RF**
- [x] Deve ser possível excluir um tipo de serviço

**RN**
- [x] Não deve ser possível excluir um tipo de serviço que contenham serviços vinculados.

## Resgatar dados do tipo de serviço
**RF**
- [x] Deve ser possível visualizar os dados do tipo de serviço

## Cadastrar serviço
**RF**
- [x] Deve ser possível cadastrar um novo serviço

**RN**
- [x] Não deve ser possível cadastrar um serviço com um tipo de serviço inexistente.

## Listagem serviços
**RF**
- [x] Deve ser possível listar todos os serviço existentes
- [x] Deve ser possível filtrar os serviços por data e/ou tipos de serviço

## Excluir serviço
**RF**
- [x] Deve ser possível excluir um serviço

## Editar serviço
**RF**
- [x] Deve ser possível editar um serviço

## Resgatar dados do serviço
**RF**
- [x] Deve ser possível visualizar os dados do serviço

# Configurando
Renomear o arquivo ormconfig.example.json para ormconfig.json adicionando as configurações do seu banco de dados.

Crie um banco de dados chamado biblioteca e use o seguinte comando:

``yarn typeorm migration:run``

# Usando docker
``docker-compose up -d``

Parando Containers:

``docker-compose stop``

Deletando ou Recriando Containers (Cuidado, isso vai apagar o banco de dados também. Fazer backup antes.):

``docker-compose down``

``docker-compose up --force-recreate``

# Configurando frontend da aplicação

Altere o BASE_URL de src/frontend/env.js com o dns (ou IP) e a porta da aplicação. Por exemplo:

``const BASE_URL = "http://localhost:3333";``

Para acessar a aplicação, basta colocar no navegador o mesmo endereço que estiver no BASE_URL

# Como realizar alterações no projeto

1º Crie uma migration para atualizar o banco de dados com a tebela nova.
Criar:

``yarn typeorm migration:create -n CreateCategories``

Commit para o banco de dados:

``yarn typeorm migration:run``

Reverter alteração:

``yarn typeorm migration:revert``

2º Crie uma entity

3º Crie o repositório e sua interface

4º Registre o repositório em shared/container para usar o singleton do tsyringer

5º Criar o useCase e o Controller.

6º Registrar rotas.