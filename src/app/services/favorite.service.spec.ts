import { TestBed } from '@angular/core/testing';
import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  let service: FavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add and check favorite', () => {
    service.addFavorite('pikachu');
    expect(service.isFavorite('pikachu')).toBeTrue();
  });

  it('should remove favorite', () => {
    service.addFavorite('pikachu');
    service.removeFavorite('pikachu');
    expect(service.isFavorite('pikachu')).toBeFalse();
  });

  it('should get all favorites', () => {
    service.addFavorite('pikachu');
    service.addFavorite('bulbasaur');
    const favs = service.getFavorites();
    expect(favs).toContain('pikachu');
    expect(favs).toContain('bulbasaur');
  });
});
