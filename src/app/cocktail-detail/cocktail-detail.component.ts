import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Cocktail from 'src/models/Cocktail';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss'],
})
export class CocktailDetailComponent implements OnInit {
  cocktail = new Cocktail();
  private id = '';

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    console.log(this.id);
    console.log(this.cocktailService.getCocktailDetails(this.id));
  }
}
