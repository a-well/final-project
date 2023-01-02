const jsonfile = require('jsonfile')
const path = require('path')
const pokemonNames = require('../data/pokemon_names.json')


// Iterate over all Pokemons in pokemons-name.json, and format according to specifictions below
// Example entry in pokemons.json:
//   {
//     "id": 1,
//     "name": "Bulbasaur",
//     "image": "http://image-pokemonthingy.com/image/1"
//   },

const allPokemon = []
Object.values(pokemonNames).map(pokemon => {

  pokemon.image = `http://image-pokemonthingy.com/image/${pokemon.id}`

  allPokemon.push(pokemon)
})

// Save to file data/pokemon.json
const file =  path.join(__dirname, '..', 'data', 'pokemons.json')
jsonfile.writeFileSync(file, allPokemon, { spaces: 2 })
