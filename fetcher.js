const fs = require('fs');
const request = require('request');
const process = require('process');

const content = (process.argv)
// fs.writeFile('/Users/stephanierowe/page-fetcher/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }
// });
fs.writeFile('/Users/stephanierowe/page-fetcher/test.txt', String(content), err => {
  if (err) {
    console.error(err);
  }
});


// // Implement a node app called fetcher.js.
// It should take two command line arguments:
// a URL
// a local file path

// //example
// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

//steps:
//CLA think prov agrr