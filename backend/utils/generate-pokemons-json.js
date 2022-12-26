const jsonfile = require('jsonfile')
const path = require('path')
const pokemonNames = require('../data/pokemon_names.json')

const allPokemon = []
Object.values(pokemonNames).map(pokemon => {

  pokemon.image = `http://image-pokemonthingy.com/image/${pokemon.id}`

  allPokemon.push(pokemon)
})

// save to file pokemon.json
const file =  path.join(__dirname, '..', 'data', 'pokemons.json')
jsonfile.writeFileSync(file, allPokemon, { spaces: 2 })
