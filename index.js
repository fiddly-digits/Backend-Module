/*
 * Node.js
 * No tenemos DOM
 * No tenemos BOM
 *
 * procesos.
 */

console.log('Hola Mundo');

const nombres = [
  'Andres',
  'Andres de Anda',
  'Christian',
  'Damian',
  'Dani',
  'Diego',
  'Dan',
  'Gustavo',
  'Ignacio',
  'Jorge',
  'Karla',
  'Lau',
  'Luis',
  'Mara',
  'Max',
  'Pao',
  'Roberto',
  'Samantha'
];

// function nameSeparator() {
//   console.log(
//     'Los nombres largos son',
//     nombres.filter((item) => item.length >= 4)
//   );
//   console.log(
//     'Los nombres cortos son',
//     nombres.filter((item) => item.length < 4)
//   );
// }

function nameSeparator() {
  let longName = [];
  let shortName = [];
  nombres.forEach((nombre) =>
    nombre.length >= 4 ? longName.push(nombre) : shortName.push(nombre)
  );
  console.log(longName);
  console.log(shortName);
}

nameSeparator();

function namesLenght() {
  return nombres.reduce((accum, curr) => {
    return { ...accum, [curr]: curr.length };
  }, {});
}

console.log(namesLenght());
