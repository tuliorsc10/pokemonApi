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

## Instalação/Execução

Para instalar as dependências utilize o comando: 

`npm install`

Depois de instalado execute o comando: 

`docker-compose up`

A partir dos containers funcionando, abra outro terminal na pasta do repositório e execute o comando:

`npx sequelize-cli db:migrate`

Para popular o banco execute o comando:

`npx sequelize-cli de:seed:all`

Depois de executado essas etapas acima realize as requisições.

## Lista de Endpoints

* **pokemons**
    * GET http://localhost:4000/pokemons/ - lista de pokemons;
    * GET http://localhost:4000/pokemons/:id - busca de pokemon por ID;
    * POST http://localhost:4000/pokemons/ - cria um pokemon;
  
    * PUT http://localhost:4000/pokemons/:id - atualiza um pokemon por ID;
    * DELETE http://localhost:4000/pokemons/:id - deleta um pokemon por ID;
    * GET http://localhost:4000/pokemons/disputacartas - compara as cartas por parâmetros escritos pelo body;
    
* **players**
    * GET http://localhost:4000/players/ - vitórias acumulativas dos players;
    
## Realizando Requisições
      
    Exemplo para realizar o post, insira essas informações no body:
     
     {
         "name": "Charmander",
         "hp": 45,
         "attack": 60,
         "defense": 45,
         "special_attack": 60,
         "special_defense": 45,
         "speed": 60   
      }
      
     Exemplo para realizar a comparação dos pokemons, insira os id's dos cards para cada player no body:
     
    {
       "playerOneCard": 1,
       "playerTwoCard": 2
      }
      
    Para realizar requisições utilize o postman ou insomnia, utilize os endpoints demonstrados acima. 
    
    Espero que gostem!
