const pokemons = require('../data/pokemons.json')

function getPokemonNameById(pokemonId) {
  if (!pokemonId) return ''
  const pokemon = pokemons.find(p => p.id == pokemonId)
  return pokemon.name
}

function getPokemonById(pokemonId) {
  if (!pokemonId) return ''
  const pokemon = pokemons.find(p => p.id == pokemonId)
  return pokemon
}

module.exports = {
  getPokemonNameById,
  getPokemonById
}