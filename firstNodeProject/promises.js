/*
 * - Estados:
 * 1. Pending: La promesa no se ha resulto, estado inicial
 * 2. Acccepted: La promesa se resolvio
 * 3. Rejected: La promesa fue rechazada
 *
 * - Declarar/Crear
 * Al momento de hacer una promesa ->
 * -- Resolve -> vamos a indicar cuando una promesa es resuelta
 * -- reject -> vamos a indicar cuando la promesa es rechazada
 *
 * - Ejecutar
 * -- THEN -> La promesa ya esta resuelta
 * -- CATCH -> La promesa esta rechazada
 *
 * - Sintaxis
 * new Promise() ->
 *
 */

const cake = {
  isRecipeRead: false,
  weHaveAllIngredients: false,
  isCakeDoughReady: false,
  isBaked: false,
  isDecorated: false
};

const readRecipe = (cake) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cake.isRecipeRead = true;
      if (!cake.isRecipeRead) {
        reject('You need to read the recipe');
      }
      resolve(cake);
    }, 2000);
  });
};

const checkIngredients = (cake) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cake.weHaveAllIngredients = true;
      if (!cake.weHaveAllIngredients) {
        reject('You need to have all the ingredients');
      }
      resolve(cake);
    }, 2000);
  });
};

const cakeDoughPreparation = (cake) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cake.isCakeDoughReady = true;
      if (!cake.isCakeDoughReady) {
        reject('You need to get that dough ready');
      }
      resolve(cake);
    }, 2000);
  });
};

const bakeCake = (cake) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cake.isBaked = true;
      if (!cake.isBaked) {
        reject('You need to bake the cake');
      }
      resolve(cake);
    }, 2000);
  });
};

const decorateCake = (cake) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cake.isDecorated = true;
      if (!cake.isDecorated) {
        reject('You need to decorate the cake');
      }
      resolve(cake);
    }, 2000);
  });
};
const promise = readRecipe(cake);
console.log('promise pending ->>', promise);

readRecipe(cake)
  .then((cake) => {
    checkIngredients(cake)
      .then((cake) => {
        cakeDoughPreparation(cake)
          .then((cake) => {
            bakeCake(cake)
              .then((cake) => {
                decorateCake(cake)
                  .then((cake) => {
                    console.log('The cake is no lie', cake);
                  })
                  .catch((error) => {
                    console.log('Error: ', error);
                  });
              })
              .catch((error) => {
                console.log('Error: ', error);
              });
          })
          .catch((error) => {
            console.log('Error: ', error);
          });
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  })
  .catch((error) => {
    console.log('Error: ', error);
  });
