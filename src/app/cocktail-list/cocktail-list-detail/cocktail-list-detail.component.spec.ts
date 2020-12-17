import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailListDetailComponent } from './cocktail-list-detail.component';

describe('CocktailListDetailComponent', () => {
  let component: CocktailListDetailComponent;
  let fixture: ComponentFixture<CocktailListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailListDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
