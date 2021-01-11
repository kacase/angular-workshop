import { ApiCocktail } from './ApiCocktail';

class Cocktail {
  id: string;
  title: string;
  category: string;
  img: string;
  instructions: string;
  ingredients: string[];

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
    this.ingredients = [
      'Light rum',
      '151 proof rum',
      'Powdered sugar',
      'Bitters',
      'Water',
      'Lime',
    ];
  }
}

export default Cocktail;
