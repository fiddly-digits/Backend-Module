/*
 * - Async/Await:
 * 1. Async es una palabra reservada que indica cuando una funcion va a ser asincrona
 * 2. Await es una palabra reservada que indica que se utiliza dentro de una funcion asincrona
 *   -- Indica que tenemos que esperar a que la promesa finalize
 *  - En Funciones el async va antes de function
 *  - En Arrow Function va antes del parentesis
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

// Al usar async-await try {} catch {}
const finishCake = async (cake) => {
  try {
    const recipeRead = await readRecipe(cake);
    const ingredientsReady = await checkIngredients(recipeRead);
    const doughPreparated = await cakeDoughPreparation(ingredientsReady);
    const cakeBaked = await bakeCake(doughPreparated);
    const cakeDecorated = await decorateCake(cakeBaked);
    return cakeDecorated;
  } catch (err) {
    return err;
  }
};

const pastry = finishCake(cake).then((cake) => {
  if (typeof cake !== 'object') {
    console.log('Error: ', cake);
  } else {
    console.log('The Cake is ready: ', cake);
  }
});
