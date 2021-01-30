import { ApiCocktail } from './ApiCocktail';

class Cocktail {
  id: string;
  title: string;
  category: string;
  img: string;
  instructions: string;
  ingredients: ingredientMeasure[];

  constructor(apiCocktail?: any) {
    this.id = (apiCocktail && apiCocktail.idDrink) || '12089';
    this.title = (apiCocktail && apiCocktail.strDrink) || 'Rum Old-Fashioned';
    this.category =
      (apiCocktail && apiCocktail.strCategory) || 'Ordinary Drink';
    this.img = (apiCocktail && apiCocktail.strDrinkThumb) || 'https://www.thecocktaildb.com/images/media/drink/otn2011504820649.jpg';
    this.instructions =
      (apiCocktail && apiCocktail.strInstructions) ||
      'Stir powdered sugar, water, and bitters in an old-fashioned glass.\n' +
        'When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.';

    const ingredientList: ingredientMeasure[] = [];
    ingredientList.push(getIngredientMeasure('Light rum', '1 1/2 oz'));
    ingredientList.push(getIngredientMeasure('151 proof rum', '1 tsp'));
    ingredientList.push(getIngredientMeasure('Powdered sugar', '1/2 tsp'));
    ingredientList.push(getIngredientMeasure('Bitters', '1 dash'));
    ingredientList.push(getIngredientMeasure('Water', '1 tsp'));
    ingredientList.push(getIngredientMeasure('Twist of Lime', ''));


    // parse all ingredients and their measur
    for (let cocktailIndex = 1; cocktailIndex <=15; cocktailIndex++) {
      const measureName = `strMeasure${cocktailIndex + 1}`
      const ingredientName = `strIngredient${cocktailIndex + 1}`
      if (
        apiCocktail?.[ingredientName] &&
        apiCocktail?.[measureName]
      ) {
        ingredientList.push(
          getIngredientMeasure(
            apiCocktail[ingredientName],
            apiCocktail[measureName],
          )
        );
      } else if (apiCocktail?.[ingredientName]) {
        ingredientList.push(
          getIngredientMeasure(apiCocktail[ingredientName], '')
        );
      }
    }
    this.ingredients = ingredientList;
  }
}

export default Cocktail;

export interface ingredientMeasure {
  prefix: string;
  ingredient: string | undefined;
  measure: number;
  unit: string | undefined;
}

function getNumFromFrac(str: string) {
  const fracReg = /([0-9])\/([0-9])/g;
  const frac = [...str.matchAll(fracReg)];
  const nom = Number(frac[0][1]);
  const denom = Number(frac[0][2]);
  return nom / denom;
}

function getIngredientMeasure(
  ingredient: string,
  measure: string
): ingredientMeasure {
  if (!measure) {
    return { prefix: '', ingredient, measure: 0, unit: '' };
  }
  const regex = /^([a-zA-Z\s]*)([0-9]\/[0-9])?\s?([0-9]+)?\s?([0-9]\/[0-9])?\s?([a-zA-Z]+)?/g;
  const arr = [...measure.matchAll(regex)];
  let num = 0;
  const unit = arr[0][5];
  if (arr[0][2]) {
    num = getNumFromFrac(arr[0][2]);
  }
  if (arr[0][3]) {
    num += Number(arr[0][3]);
  }
  if (arr[0][4]) {
    num += getNumFromFrac(arr[0][4]);
  }
  return {
    prefix: arr[0][1] || '',
    ingredient,
    measure: num,
    unit: arr[0][5] || '',
  };
}
