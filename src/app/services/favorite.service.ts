import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private storageKey = 'favoritePokemons';

  constructor() { }

  getFavorites(): string[] {
    const favorites = localStorage.getItem(this.storageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  isFavorite(name: string): boolean {
    const favorites = this.getFavorites();
    return favorites.includes(name);
  }

  addFavorite(name: string) {
    const favorites = this.getFavorites();
    if (!favorites.includes(name)) {
      favorites.push(name);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(name: string) {
    const favorites = this.getFavorites().filter(item => item !== name);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }
}
