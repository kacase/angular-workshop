import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import Cocktail from 'src/models/Cocktail';
import { slider } from './animations/animations';
import { CocktailService } from './services/cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider],
})
export class AppComponent implements OnInit {
  showFiller = false;
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  constructor() {}

  ngOnInit(): void {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation;
  }
  onActivate(event: Event) {
    document.querySelector('h1')?.scrollTo(0,0)
  }
}
