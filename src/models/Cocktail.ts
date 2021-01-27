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
    this.img = (apiCocktail && apiCocktail.strDrinkThumb) || '';
    this.instructions =
      (apiCocktail && apiCocktail.strInstructions) ||
      'Stir powdered sugar, water, and bitters in an old-fashioned glass.\n' +
        'When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.';

    const ingredientList: ingredientMeasure[] = [];
    if (apiCocktail && apiCocktail.strIngredient1 && apiCocktail.strMeasure1) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient1,
          apiCocktail.strMeasure1
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient1) {
      ingredientList.push(getIngredientMeasure(apiCocktail.strIngredient1, ''));
    }

    if (apiCocktail && apiCocktail.strIngredient2 && apiCocktail.strMeasure2) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient2,
          apiCocktail.strMeasure2
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient2) {
      ingredientList.push(getIngredientMeasure(apiCocktail.strIngredient2, ''));
    }

    if (apiCocktail && apiCocktail.strIngredient3 && apiCocktail.strMeasure3) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient3,
          apiCocktail.strMeasure3
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredien3) {
      ingredientList.push(getIngredientMeasure(apiCocktail.strIngredient3, ''));
    }

    if (apiCocktail && apiCocktail.strIngredient4 && apiCocktail.strMeasure4) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient4,
          apiCocktail.strMeasure4
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient4) {
      ingredientList.push(getIngredientMeasure(apiCocktail.strIngredient4, ''));
    }

    if (apiCocktail && apiCocktail.strIngredient5 && apiCocktail.strMeasure1) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient5,
          apiCocktail.strMeasure5
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient5) {
      ingredientList.push(getIngredientMeasure(apiCocktail.strIngredient5, ''));
    }
    if (apiCocktail && apiCocktail.strIngredient6 && apiCocktail.strMeasure6) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient6,
          apiCocktail.strMeasure6
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient6) {
      ingredientList.push(getIngredientMeasure(apiCocktail.strIngredient6, ''));
    }

    if (apiCocktail && apiCocktail.strIngredient7 && apiCocktail.strMeasure7) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient7,
          apiCocktail.strMeasure7
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient7) {
      ingredientList.push(getIngredientMeasure(apiCocktail.strIngredient7, ''));
    }

    if (apiCocktail && apiCocktail.strIngredient8 && apiCocktail.strMeasure8) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient8,
          apiCocktail.strMeasure8
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient8) {
      ingredientList.push(getIngredientMeasure(apiCocktail.strIngredient8, ''));
    }

    if (apiCocktail && apiCocktail.strIngredient9 && apiCocktail.strMeasure9) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient9,
          apiCocktail.strMeasure9
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient9) {
      ingredientList.push(getIngredientMeasure(apiCocktail.strIngredient9, ''));
    }

    if (
      apiCocktail &&
      apiCocktail.strIngredient11 &&
      apiCocktail.strMeasure11
    ) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient11,
          apiCocktail.strMeasure11
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient11) {
      ingredientList.push(
        getIngredientMeasure(apiCocktail.strIngredient11, '')
      );
    }

    if (
      apiCocktail &&
      apiCocktail.strIngredient12 &&
      apiCocktail.strMeasure12
    ) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient12,
          apiCocktail.strMeasure12
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient12) {
      ingredientList.push(
        getIngredientMeasure(apiCocktail.strIngredient12, '')
      );
    }

    if (
      apiCocktail &&
      apiCocktail.strIngredient13 &&
      apiCocktail.strMeasure13
    ) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient13,
          apiCocktail.strMeasure13
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient13) {
      ingredientList.push(
        getIngredientMeasure(apiCocktail.strIngredient13, '')
      );
    }

    if (
      apiCocktail &&
      apiCocktail.strIngredient14 &&
      apiCocktail.strMeasure14
    ) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient14,
          apiCocktail.strMeasure14
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient14) {
      ingredientList.push(
        getIngredientMeasure(apiCocktail.strIngredient14, '')
      );
    }

    if (
      apiCocktail &&
      apiCocktail.strIngredient15 &&
      apiCocktail.strMeasure15
    ) {
      ingredientList.push(
        getIngredientMeasure(
          apiCocktail.strIngredient15,
          apiCocktail.strMeasure15
        )
      );
    } else if (apiCocktail && apiCocktail.strIngredient15) {
      ingredientList.push(
        getIngredientMeasure(apiCocktail.strIngredient15, '')
      );
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
