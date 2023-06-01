const fs = require('fs');

console.log('readfile', fs.readFile);

// fs.readFile('./hola.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

fs.writeFile(
  'message.txt',
  'This is my first Node.js File created from codeeee',
  'utf8',
  (err) => {
    if (err) throw err;
    console.log('File Saved Successfully');
  }
);
