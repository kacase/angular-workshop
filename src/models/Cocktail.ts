import { ApiCocktail } from './ApiCocktail';

class Cocktail {
  id: string;
  title: string;
  category: string;
  img: string;
  instructions: string;
  ingredients: ingredientMeasure[];
  

  constructor(apiCocktail?: ApiCocktail) {
    this.id = apiCocktail?.idDrink ?? '12089';
    this.title = apiCocktail?.strDrink ?? 'Rum Old-Fashioned';
    this.category = apiCocktail?.strCategory ?? 'Ordinary Drink';
    this.img =
      apiCocktail?.strDrinkThumb ?? '';
    this.instructions =
      apiCocktail?.strInstructions ??
      'Stir powdered sugar, water, and bitters in an old-fashioned glass. When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.';
    // TODO: Get Ingredients from mapping
    // this.ingredients = [
    //   'Light rum',
    //   '151 proof rum',
    //   'Powdered sugar',
    //   'Bitters',
    //   'Water',
    //   'Lime',
    // ];
    console.log(apiCocktail);
    var ingredientList: ingredientMeasure[] = [];
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient1,
      measure: Number(apiCocktail?.strMeasure1?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient2,
      measure: Number(apiCocktail?.strMeasure2?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient3,
      measure: Number(apiCocktail?.strMeasure3?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient4,
      measure: Number(apiCocktail?.strMeasure4?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient5,
      measure: Number(apiCocktail?.strMeasure5?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient6,
      measure: Number(apiCocktail?.strMeasure6?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient7,
      measure: Number(apiCocktail?.strMeasure7?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient8,
      measure: Number(apiCocktail?.strMeasure8?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient9,
      measure: Number(apiCocktail?.strMeasure9?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient10,
      measure: Number(apiCocktail?.strMeasure10?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient11,
      measure: Number(apiCocktail?.strMeasure11?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient12,
      measure: Number(apiCocktail?.strMeasure12?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient13,
      measure: Number(apiCocktail?.strMeasure13?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient14,
      measure: Number(apiCocktail?.strMeasure14?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    ingredientList.push({
      ingredient: apiCocktail?.strIngredient15,
      measure: Number(apiCocktail?.strMeasure15?.replace(/\D/g,''))
      // ingredientMeasure.measure= +apiCocktail?.strMeasure1
    })
    console.log(ingredientList);
    this.ingredients= ingredientList;
  }
  
}

export default Cocktail;

export interface ingredientMeasure {
  ingredient: string | undefined ,
  measure: number
}
