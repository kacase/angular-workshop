import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailCardsComponent } from './cocktail-cards/cocktail-cards.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

const routes: Routes = [
  { path: '', component: CocktailCardsComponent, data: { animation:'Home' } },
  { path: 'details', component: CocktailDetailComponent, data: { animation:'Details' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
