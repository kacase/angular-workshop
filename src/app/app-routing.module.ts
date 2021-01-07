import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailCardsComponent } from './cocktail-cards/cocktail-cards.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

const routes: Routes = [
  { path: '', component: CocktailCardsComponent },
  { path: 'details', component: CocktailDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
