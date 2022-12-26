const pokemons = require('../data/pokemons.json')

function getPokemonNameById(pokemonId) {
  const pokemon = pokemons.find(p => p.id === pokemonId)
  return pokemon.name
}

module.exports = {
  getPokemonNameById
}