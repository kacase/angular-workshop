import { Pipe, PipeTransform } from '@angular/core';
import { ingredientMeasure } from '../../models/Cocktail';

@Pipe({
  name: 'unit',
})
export class UnitPipe implements PipeTransform {
  transform(ingredient: ingredientMeasure): string {
    let result = '';

    if (ingredient.prefix) {
      result += ingredient.prefix;
    }

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
