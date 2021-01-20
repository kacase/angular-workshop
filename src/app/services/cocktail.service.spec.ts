
import { CocktailService } from './cocktail.service';
import Cocktail from 'src/models/Cocktail';
import { of } from 'rxjs';

let httpClientSpy: { get: jasmine.Spy };
let cocktailService: CocktailService;

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  cocktailService = new CocktailService(httpClientSpy as any);
});

it('should return expected cocktail (HttpClient called once)', () => {
  const expectedCocktail: Cocktail = new Cocktail();
  console.log('test cocktail', expectedCocktail);

  httpClientSpy.get.and.returnValue(of(expectedCocktail));

  cocktailService.getCocktailDetails('12089').subscribe(

    cocktail => {
      console.log('cocktail from api', cocktail);
      expect(cocktail).toEqual(expectedCocktail, 'expected cocktail')
    },
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
