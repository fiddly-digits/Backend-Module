let parameter = process.argv[2];

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

function searcher(searchInput) {
  return nombres.includes(searchInput) ? 'Bienvenido' : 'Fuera de aqui';
}

console.log(process.argv);
console.log(searcher(parameter));
