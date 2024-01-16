const fs = require('fs');
const process = require('process');
const axios = require('axios');


// Handles the output of text by either writing it to a file (if 'out' is provided) or printing it to the console.

function handleOutput(text, out) {
     if (out) {
          fs.writeFile(out, text, 'utf8', function (err) {
               if (err) {
                    console.error(`ERROR: Couldn't write ${out}: ${err}`);
                    process.exit(1);
               }
          });
     } else {
          console.log(text);
     }
}



// Reads and prints the contents of a file specified by the provided path.

function cat(path, out) {
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

async function webCat(url, out) {
     try {
          let resp = await axios.get(url);
          console.log(resp.data);
     } catch (err) {
          console.error(`ERROR Fetching ${url}: ${err}`);
          process.exit(1);
     }
}

let path;
let out;

if (process.argv[2] === '--out') {
     out = process.argv[3];
     path = process.argv[4];
} else {
     path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
     webCat(path, out);
} else {
     cat(path, out);
}