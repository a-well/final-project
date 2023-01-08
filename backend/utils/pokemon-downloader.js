const http = require('https');
const fs = require('fs');
// Reference: https://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js-without-using-third-party-libraries

const download = function(url, dest, cb) {
  const file = fs.createWriteStream(dest);
  http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);  // Close() is async, call cb after close completes
    })
  })
}

// Download list of all Pokemons currently available in PokemonGo (name and pokedex entry number)
download('https://pogoapi.net/api/v1/released_pokemon.json', './data/pokemon_names.json', () => {
  console.log('File successfully downloaded')
  process.exit()
})

//@TODO add shiny sprites https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/133.png
