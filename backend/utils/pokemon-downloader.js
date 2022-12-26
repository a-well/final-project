const http = require('https');
const fs = require('fs');

const download = function(url, dest, cb) {
  const file = fs.createWriteStream(dest);
  http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);  // close() is async, call cb after close completes.
    })
  })
}

download('https://pogoapi.net/api/v1/released_pokemon.json', './data/pokemon_names.json', () => {
  console.log('File successfully downloaded')
  process.exit()
})
