/*
 * - Declaracion
 * - Ejecucion
 * - Referencia
 *
 * Callback es una funcion que se pasa como parametro a otra funcion para ejecutarla dentro.
 */

const saludar = () => {
  console.log('Saludando');
};

// * Referencia
saludar;

// * Ejecucion
saludar();

// * Callback

const avisar = () => {
  console.log('Ya llegue, ama');
};

function irACasa(callback) {
  console.log('Caminando a casa...');
  callback();
}

//* Callback Funcion Declarada
irACasa(avisar);

//* Callback Funcion Anonima
irACasa(() => console.log('Ya llegue apa'));
