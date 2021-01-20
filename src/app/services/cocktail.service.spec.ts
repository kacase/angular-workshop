







// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Cocktail from 'src/models/Cocktail';
import { Drinks } from 'src/models/drinks.model';
import { ApiCocktail } from 'src/models/ApiCocktail';
import { CocktailService } from './cocktail.service';
import { of } from 'rxjs';



describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let httpClientSpy: { get: jasmine.Spy };
  let cocktailService: CocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  /// Tests begin ///
  it('can test HttpClient.get', () => {
    const testData: Drinks = {"drinks":[{"idDrink":"12089","strDrink":"Rum Old-fashioned","strDrinkAlternate":'null',"strDrinkES":'null',"strDrinkDE":'null',"strDrinkFR":'null',"strDrinkZH-HANS":'null',"strDrinkZH-HANT":'null',"strTags":'null',"strVideo":'null',"strCategory":"Ordinary Drink","strIBA":'null',"strAlcoholic":"Alcoholic",
                              "strGlass":"Old-fashioned glass","strInstructions":"Stir powdered sugar, water, and bitters in an old-fashioned glass. When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.",
                              "strInstructionsES":'null',"strInstructionsDE":"Puderzucker, Wasser und Bitter in einem old-fashioned Glas verr\u00fchren. Wenn sich der Zucker aufgel\u00f6st hat, Eisw\u00fcrfel und leichten Rum hinzuf\u00fcgen. Die Limettenspirale hinzuf\u00fcgen, 151er Rum darauf verteilen und servieren.",
                              "strInstructionsFR":'null',"strInstructionsZH-HANS":'null',"strInstructionsZH-HANT":'null',"strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/otn2011504820649.jpg","strIngredient1":"Light rum","strIngredient2":"151 proof rum",
                              "strIngredient3":"Powdered sugar","strIngredient4":"Bitters","strIngredient5":"Water","strIngredient6":"Lime peel","strIngredient7":'null',"strIngredient8":'null',"strIngredient9":'null',"strIngredient10":'null',"strIngredient11":'null',"strIngredient12":'null',"strIngredient13":'null',
                              "strIngredient14":'null',"strIngredient15":'null',"strMeasure1":"1 1\/2 oz ","strMeasure2":"1 tsp ","strMeasure3":"1\/2 tsp ","strMeasure4":"1 dash ","strMeasure5":"1 tsp ","strMeasure6":"Twist of ","strMeasure7":'null',"strMeasure8":'null',"strMeasure9":'null',
                              "strMeasure10":'null',"strMeasure11":'null',"strMeasure12":'null',"strMeasure13":'null',"strMeasure14":'null',"strMeasure15":'null',"strImageSource":'null',"strImageAttribution":'null',"strCreativeCommonsConfirmed":"No","dateModified":"2017-09-07 22:44:09"}]};
    console.log('testdata', testData);
    // Make an HTTP GET request
    const testUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12089';
    httpClient.get<Drinks>(testUrl)
      .subscribe(data => {
        console.log('data from api', data);
        expect(data).toEqual(testData);
      }
        // When observable resolves, result should match test data
        
      );
  
    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12089');
  
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
  
    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);
  
    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

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

});