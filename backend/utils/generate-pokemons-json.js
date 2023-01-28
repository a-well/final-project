const jsonfile = require('jsonfile')
const path = require('path')
const pokemonNames = require('../data/pokemon_names.json')

const allPokemon = []
Object.values(pokemonNames).map(pokemon => {
  const pokenumber = pokemon.id

  pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokenumber}.png`
  pokemon.imageShiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokenumber}.png`

  allPokemon.push(pokemon)
})

// Save to file data/pokemon.json

const file =  path.join(__dirname, '..', 'data', 'pokemons.json')
jsonfile.writeFileSync(file, allPokemon, { spaces: 2 })


// npm run generate-pokemons