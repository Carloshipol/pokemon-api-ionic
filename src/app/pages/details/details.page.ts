import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  name: string = '';
  pokemon: any;
  isFav: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name') || '';
    this.loadPokemon();
    this.checkFavorite();
  }

  checkFavorite() {
    this.isFav = this.favoriteService.isFavorite(this.name);
  }

  toggleFavorite() {
    if (this.isFav) {
      this.favoriteService.removeFavorite(this.name);
      this.isFav = false;
    } else {
      this.favoriteService.addFavorite(this.name);
      this.isFav = true;
    }
  }
  
  loadPokemon() {
    this.pokemonService.getPokemonDetails(this.name).subscribe({
      next: (data) => {
        this.pokemon = data;
      },
      error: (err) => {
        console.error('Error fetching Pokémon details:', err);
      }
    });
  }

  getTypes(): string {
    return this.pokemon.types.map((t: any) => t.type.name).join(', ');
  }

  getAbilities(): string {
    return this.pokemon.abilities.map((a: any) => a.ability.name).join(', ');
  }
}
