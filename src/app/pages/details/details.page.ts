import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  name: string = '';
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name') || '';
    this.loadPokemon();
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
