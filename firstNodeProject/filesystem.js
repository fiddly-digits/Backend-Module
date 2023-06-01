const fs = require('fs');

console.log('readfile', fs.readFile);

// fs.readFile('./hola.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// ! Las funciones son Asincronas
// * Crea un archivo
// fs.writeFile(
//   'message.txt',
//   'This is my first Node.js File created from codeeee',
//   'utf8',
//   (err) => {
//     if (err) throw err;
//     console.log('File Saved Successfully');
//   }
// );

// * Agrega texto a un archivo
// fs.appendFile(
//   'message.txt',
//   'And this is me testing append to a File',
//   (err) => {
//     if (err) throw err;
//     console.log('The String was appended to a file succesfully');
//   }
// );

// fs.appendFile('hola.txt', '\n Testing in another file', (err) => {
//   if (err) throw err;
//   console.log('The String was appended to a file succesfully');
// });

// * Elimina un archivo
fs.unlink('hola.txt', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('The File was deleted.');
});

//*Copia Un Archivo
fs.copyFile('message.txt', 'messageCopy.txt', (err) => {
  if (err) throw err;
  console.log('The Copy was made succesfully');
});

// * Crea un directorio

fs.mkdir('./newDir', (err) => {
  if (err) throw err;
  console.log('Se ha creado el directorio');
});
