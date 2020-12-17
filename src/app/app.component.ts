import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showFiller = false;
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor() {}

  ngOnInit() {}
}
