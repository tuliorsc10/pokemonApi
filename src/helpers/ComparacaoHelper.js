function PrimeiraCarta(primeiroPokemon) {
    let propriedadePrimeiroPokemon = Object.entries(primeiroPokemon);
    let objetoPrimeiroPokemon = propriedadePrimeiroPokemon[1][1]
    let valorPrimeiroPokemon = Object.values(objetoPrimeiroPokemon)
    return valorPrimeiroPokemon
}

function SegundaCarta(segundoPokemon) {
    let propriedadeSegundoPokemon = Object.entries(segundoPokemon);
    let objetoSegundoPokemon = propriedadeSegundoPokemon[1][1]
    let valorSegundoPokemon = Object.values(objetoSegundoPokemon)
    return valorSegundoPokemon
}

module.exports = PrimeiraCarta, SegundaCarta;