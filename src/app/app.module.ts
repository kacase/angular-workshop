import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailCardComponent } from './cocktail-cards/cocktail-card/cocktail-card.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';

import { HttpClientModule } from '@angular/common/http';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { CocktailCardsComponent } from './cocktail-cards/cocktail-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientFilterComponent } from './cocktail-list/ingredient-filter/ingredient-filter.component';
import { UnitPipe } from './cocktail-detail/unit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailCardComponent,
    CocktailListComponent,
    CocktailDetailComponent,
    CocktailCardsComponent,
    IngredientFilterComponent,
    UnitPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
