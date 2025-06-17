import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage implements OnInit {

  pokemons: any[] = [];
  offset = 0;
  limit = 20;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe((response) => {
      const fetchedPokemons = response.results.map((pokemon: any) => {
        const id = this.getIdFromUrl(pokemon.url);
        return {
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          id
        };
      });

      this.pokemons = [...this.pokemons, ...fetchedPokemons];
    });
  }

  loadMore() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  getIdFromUrl(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2]);
  }

  goToDetails(name: string) {
    this.router.navigate(['/details', name]);
  }
}
