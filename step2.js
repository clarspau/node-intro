const fs = require('fs');
const process = require('process');
const axios = require('axios');


// Reads and prints the contents of a file specified by the provided path.

function cat(path) {
     fs.readFile(path, 'utf8', function (err, data) {
          if (err) {
               console.error(`ERROR Reading`, path, `: ${err}`);
               process.exit(1);
          } else {
               console.log(`file contents: ${data}`);
          }
     });
}


// This should take a URL and, using axios, should read the content of that URL and print it to the console.

async function webCat(url) {
     try {
          let resp = await axios.get(url);
          console.log(resp.data);
     } catch (err) {
          console.error(`ERROR Fetching ${url}: ${err}`);
          process.exit(1);
     }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
     webCat(path);
} else {
     cat(path);
}