import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,          // <-- aqui: define como standalone
  imports: [                 // <-- aqui: importa módulos que o template usa
    CommonModule,
    IonicModule
  ]
})
export class FavoritesPage implements OnInit {

  pokemons: any[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadFavorites();
  }

  ionViewWillEnter() {
    this.loadFavorites();
  }

  loadFavorites() {
    const favorites = this.favoriteService.getFavorites();
    this.pokemons = [];

    favorites.forEach(name => {
      this.pokemonService.getPokemonDetails(name).subscribe(data => {
        this.pokemons.push({
          name: data.name,
          image: data.sprites.front_default
        });
      });
    });
  }

  goToDetails(name: string) {
    this.router.navigate(['/details', name]);
  }
}
