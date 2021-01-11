import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap,
  NavigationStart,
} from '@angular/router';
import Cocktail from 'src/models/Cocktail';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss'],
})
export class CocktailDetailComponent implements OnInit {
  cocktail!: Cocktail;

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cocktail = this.cocktailService.getCocktailDetails(params.id);
    });
  }
}
