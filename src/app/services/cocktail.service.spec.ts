// Other imports
import Cocktail from '../../models/Cocktail';
import { CocktailService } from './cocktail.service';
import { of } from 'rxjs';



describe('HttpClient testing', () => {
  // create variables
  let httpClientSpy: { get: jasmine.Spy };
  let cocktailService: CocktailService;

  // beforeEach-Loop with initializing of the cocktail service
  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    cocktailService = new CocktailService(httpClientSpy as any);
  });

  // check if method getCocktailDetails works correct
  it('getCocktailDetails: should return expected cocktail', () => {
    const expectedCocktail: Cocktail = new Cocktail();

    httpClientSpy.get.and.returnValue(of(expectedCocktail));

    cocktailService.getCocktailDetails('12089').subscribe(

      cocktail => {
        expect(cocktail).toEqual(expectedCocktail, 'expected cocktail');
      },
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
