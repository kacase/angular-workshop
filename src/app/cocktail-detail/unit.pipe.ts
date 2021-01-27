import { Pipe, PipeTransform } from '@angular/core';
import Cocktail, { ingredientMeasure } from 'src/models/Cocktail';

@Pipe({
  name: 'unit',
})
export class UnitPipe implements PipeTransform {
  transform(ingredient: ingredientMeasure): string {
    console.log('ingredient', ingredient);
    let result = '';
    if (ingredient.measure != 0) {
      result += Math.round((ingredient.measure + Number.EPSILON) * 100) / 100;
    }

    if (ingredient.unit) {
      result += ' ' + ingredient.unit;
    }

    if (ingredient.ingredient) {
      result += ' ' + ingredient.ingredient;
    }
    return result;
  }
}
