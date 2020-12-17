class Cocktail {
  id: string;
  title: string;
  category: string;
  img: string;
  instructions: string;
  ingredients: string[];

  constructor(
    id?: string,
    title?: string,
    category?: string,
    img?: string,
    instructions?: string,
    ingredients?: string[]
  ) {
    this.id = id ?? '12089';
    this.title = title ?? 'Rum Old-Fashioned';
    this.category = category ?? 'Ordinary Drink';
    this.img =
      img ??
      'https://www.thecocktaildb.com//images//media//drink//otn2011504820649.jpg';
    this.instructions =
      instructions ??
      'Stir powdered sugar, water, and bitters in an old-fashioned glass. When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.';
    this.ingredients = ingredients ?? [
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