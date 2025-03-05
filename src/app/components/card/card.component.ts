import { Component, OnInit } from '@angular/core';
import { BadgeComponent } from "../badge/badge.component";
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  imports: [BadgeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  name: string = 'charmander';
  types: string[] = ['fire', 'rock'];
  image: string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786841sy02u.png&f=1&nofb=1&ipt=912ba93b1610e13e7d5e30c2d185dc168d8644665896e181aa585d21ef32b97c&ipo=images'

  constructor(
    private service: PokemonService
  ) { }

  ngOnInit(): void {
    this.service.getPokemon("pikachu")
  }
}
