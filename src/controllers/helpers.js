if(primeiroPokemon.hp > segundoPokemon.hp) {
    primeiraCarta +=1
}else {
    segundaCarta += 1
}
if(primeiroPokemon.attack > segundoPokemon.attack) {
    primeiraCarta +=1
}else {
    segundaCarta += 1
}
if(primeiroPokemon.defense > segundoPokemon.defense) {
    primeiraCarta +=1
}else {
    segundaCarta += 1
}
if(primeiroPokemon.special_attack > segundoPokemon.special_attack) {
    primeiraCarta +=1
}else {
    segundaCarta += 1
}
if(primeiroPokemon.special_defense> segundoPokemon.special_defense) {
    primeiraCarta +=1
}else {
    segundaCarta += 1
}
if(primeiroPokemon.speed > segundoPokemon.speed) {
    primeiraCarta +=1
}else {
    segundaCarta += 1
}
if(primeiraCarta > segundaCarta ) {
    return res.status(200).json(primeiroPokemon)
}else {
    return res.status(200).json(segundoPokemon)
}