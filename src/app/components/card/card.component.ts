import { Component, OnInit } from '@angular/core';
import { BadgeComponent } from "../badge/badge.component";
import { PokemonService } from '../../services/pokemon/pokemon.service';
import type { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  imports: [BadgeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  pokemonData?: PokemonData

  constructor(
    private service: PokemonService
  ) { }

  ngOnInit(): void {
    const result = this.service.getPokemon("charizard")


    result.subscribe({
      next: (res) => {
        const { id, name, sprites, types } = res

        this.pokemonData = {
          id,
          name,
          sprites,
          types
        }
      },
      error: (err) => console.log(err)
    })
  }
}
