//console.log('Mi primer proyecto con node');

/*
 * Leer documentacion.
 * Hacer un ejercicio con Yargs-parser
 */

const argv = require('yargs-parser')(process.argv.slice(2));
//console.log(argv);

/*
 * Reutilizar el ejercicio de mandarle un nombres
 * si si lo encontramos bienvenido en arcoiris
 * y sino, la impresion fuera de aqui en rojo
 */

const nameToCheck = argv.name;
const colors = require('colors');

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

const searcher = (name) =>
  nombres.includes(name) ? 'Bienvenido'.rainbow : 'Fuera de aqui'.bgRed;

console.log(searcher(nameToCheck));
