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

setTimeout(() => {
  console.log('Timeout');
}, 3000);

const koder = {
  seDieronInformes: false,
  seEntrevisto: false,
  sePago: false,
  seInscribio: false
};

const darInformes = (koder) => {
  setTimeout(() => {
    koder.seDieronInformes = true;
    return koder;
  });
};

const koderInformado = darInformes(koder);

console.log('koder informado', koderInformado);
