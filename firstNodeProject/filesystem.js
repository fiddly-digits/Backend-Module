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

// * Creo que tiene prioridad el append, lo hace primero que el write.
fs.appendFile(
  'message.txt',
  'And this is me testing append to a File',
  (err) => {
    if (err) throw err;
    console.log('The String was appended to a file succesfully');
  }
);

fs.appendFile('hola.txt', '\n Testing in another file', (err) => {
  if (err) throw err;
  console.log('The String was appended to a file succesfully');
});
