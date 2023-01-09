const jsonfile = require('jsonfile')
const path = require('path')
const pokemonNames = require('../data/pokemon_names.json')


// function leftPad (str, len, ch) {
//   // convert `str` to a `string`
//   str = str + '';
//   // `len` is the `pad`'s length now
//   len = len - str.length;
//   // doesn't need to pad
//   if (len <= 0) return str;
//   // `ch` defaults to `' '`
//   if (!ch && ch !== 0) ch = ' ';
//   // convert `ch` to a `string` cuz it could be a number
//   ch = ch + '';
//   // cache common use cases
//   if (ch === ' ' && len < 10) return cache[len] + str;
//   // `pad` starts with an empty string
//   var pad = '';
//   // loop
//   while (true) {
//     // add `ch` to `pad` if `len` is odd
//     if (len & 1) pad += ch;
//     // divide `len` by 2, ditch the remainder
//     len >>= 1;
//     // "double" the `ch` so this operation count grows logarithmically on `len`
//     // each time `ch` is "doubled", the `len` would need to be "doubled" too
//     // similar to finding a value in binary search tree, hence O(log(n))
//     if (len) ch += ch;
//     // `len` is 0, exit the loop
//     else break;
//   }
//   // pad `str`!
//   return pad + str;
// }
// Iterate over all Pokemons in pokemons-name.json, and format according to specifictions below
// Example entry in pokemons.json:
//   {
//     "id": 1,
//     "name": "Bulbasaur",
//     "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/001.png"
//   },

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

//@TODO add shiny https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png or just replace shiny emoji with shiny sprite?