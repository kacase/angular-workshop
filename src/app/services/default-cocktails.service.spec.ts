import { TestBed } from '@angular/core/testing';

import { DefaultCocktailsService } from './default-cocktails.service';

describe('DefaultCocktailsService', () => {
  let service: DefaultCocktailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultCocktailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
