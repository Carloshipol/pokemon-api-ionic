import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch pokemons', () => {
    const dummyResponse = {
      results: [{ name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/1/' }]
    };
  
    service.getPokemonList(0, 10).subscribe((res: any) => {
      expect(res.results.length).toBe(1);
      expect(res.results[0].name).toBe('pikachu');
    });
  
    const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
  
});
