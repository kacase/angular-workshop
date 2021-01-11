import { TestBed } from '@angular/core/testing';

import { DefaultCocktailServiceService } from './default-cocktail-service.service';

describe('DefaultCocktailServiceService', () => {
  let service: DefaultCocktailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultCocktailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
