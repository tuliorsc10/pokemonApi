# Desafio SomoS

Linguagem: Javascript

Framework: Node/Express

# Introdução

Esta API foi desenvolvida para criar, buscar, alterar e deletar pokemons, além de comparar dois pokemons para saber qual o mais forte. 
<br>A partir da comparação o vencedor acumula pontos, podendo ser retornado as vitórias acumuladas.

## Devemos ter instalado

* [docker](https://www.docker.com/);
* [node](https://nodejs.org/en/);
* [postman](https://www.postman.com/) ou [insomnia](https://insomnia.rest/);

O postman ou insomnia também podem ser utilizados online,
nesse caso não há necessidade de instalação.

## Repositório

Para baixar utilize o comando git clone;

## Tecnologias utilizadas(bibliotecas, frameworks)

* [express](https://github.com/expressjs/express);
* [dotenv](https://github.com/motdotla/dotenv);
* [sequelize](https://github.com/sequelize/sequelize);
* [sequelize-cli](https://github.com/sequelize/cli);
* [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html);
* [path](https://nodejs.org/api/path.html);
* [pg](https://github.com/brianc/node-postgres);
* [pg-hstore](https://github.com/scarney81/pg-hstore);
* [nodemon](https://github.com/remy/nodemon);

## Instalando dependências

Para instalar as dependências utilize o comando: 

**npm install**

Depois de instalado execute o comando: 

**docker-compose up**

Em outro terminal execute o comando:

**npx sequelize-cli db:migrate**

Para popular o banco execute o comando:

**npx sequelize-cli de:seed:all**

## Lista de Endpoints

* **pokemons (http://localhost:4000/pokemons)**
    * GET / - lista de pokemons;
    * GET /:id - busca de pokemon por ID;
    * POST / - cria um pokemon;
    * PUT /:id - atualiza um pokemon por ID;
    * DELETE/:id - deleta um pokemon por ID;
    * GET /disputacartas - compara as cartas por parâmetros escritos pelo body;
    
* **players (http://localhost:4000/players)**
    * GET / - vitórias acumulativas dos players;
    
## Realizando Requisições

    Para realizar requisições utilize o postman ou insomnia,
    utilize os endpoints demonstrados acima. Espero que gostem!
