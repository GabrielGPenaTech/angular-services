import { Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { FormsModule } from '@angular/forms';
import { PokemonService } from './services/pokemon/pokemon.service';
import { PokemonData } from './models/pokemonData';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  pokemonNameInput = '';
  currentPokemon?: PokemonData

  constructor(
    private service: PokemonService
  ) {  }

  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon() {
    const searchName = this.pokemonNameInput || "charizard"
    const result = this.service.getPokemon(searchName)

    result.subscribe({
      next: (res) => {
        const { id, name, sprites, types } = res

        this.currentPokemon = {
          id,
          name,
          sprites,
          types
        }
      },
      error: (err) => alert("pokemon não encontrado!")
    })
  }
}
