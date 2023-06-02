/*
 * Ejercicio:
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el pastel
 */

const cake = {
  isRecipeRead: false,
  weHaveAllIngredients: false,
  isCakeDoughReady: false,
  isBaked: false,
  isDecorated: false
};

const readRecipe = (cake, checkIngredients) => {
  let error = null;
  setTimeout(() => {
    cake.isRecipeRead = true;
    if (!cake.isRecipeRead) {
      error = 'You need to read the recipe';
    }
    checkIngredients(error, cake);
  }, 1000);
};

const checkIngredients = (cake, cakeDoughPreparation) => {
  let error = null;
  setTimeout(() => {
    cake.weHaveAllIngredients = true;
    if (!cake.weHaveAllIngredients) {
      error = 'You need to have all the ingredients';
    }
    cakeDoughPreparation(error, cake);
  }, 2000);
};

const cakeDoughPreparation = (cake, bakeCake) => {
  let error = null;
  setTimeout(() => {
    cake.isCakeDoughReady = true;
    if (!cake.isCakeDoughReady) {
      error = 'You need to get that dough ready';
    }
    bakeCake(error, cake);
  }, 1000);
};

const bakeCake = (cake, isDecorated) => {
  let error = null;
  setTimeout(() => {
    cake.isBaked = true;
    if (!cake.isBaked) {
      error = 'You need to bake the cake';
    }
    isDecorated(error, cake);
  }, 2000);
};

const isDecorated = (cake) => {
  let error = null;
  setTimeout(() => {
    cake.isDecorated = true;
    if (!cake.isDecorated) {
      error = 'You need to decorate the cake';
      return console.log(error);
    } else {
      console.log('Your Cake is Ready!', cake);
    }
  }, 1000);
};

//callbacks

readRecipe(cake, (error, cake) => {
  if (error) {
    console.log(error);
    return;
  }
  checkIngredients(cake, (error, cake) => {
    if (error) {
      console.log(error);
      return;
    }
    cakeDoughPreparation(cake, (error, cake) => {
      if (error) {
        console.log(error);
        return;
      }
      bakeCake(cake, (error, cake) => {
        if (error) {
          console.log(error);
          return;
        }
        isDecorated(cake);
      });
    });
  });
});
