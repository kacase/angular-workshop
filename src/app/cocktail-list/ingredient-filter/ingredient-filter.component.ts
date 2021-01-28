import {
  Component,
  EventEmitter,
  Injectable,
  OnInit,
  Output,
} from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-ingredient-filter',
  templateUrl: './ingredient-filter.component.html',
  styleUrls: ['./ingredient-filter.component.scss'],
})
export class IngredientFilterComponent implements OnInit {
  @Output() alcChanged = new EventEmitter<string>();
  @Output() ingredientChanged = new EventEmitter<string>();
  ingredientFilter = '';
  currentIngredient = '';
  allIngredients!: string[];
  ingredients!: string[];

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.allIngredients = this.cocktailService.getIngredients();
  }

  onValChange(value: string) {
    this.alcChanged.emit(value);
  }

  doFilter() {
    this.ingredients = this.allIngredients.filter((ingredient) => {
      return (
        ingredient
          .toLowerCase()
          .indexOf(this.currentIngredient.toLowerCase()) !== -1
      );
    });
  }
  ingredientChosen() {
    this.ingredientChanged.emit(this.currentIngredient);
  }
}
