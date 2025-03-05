import { Injectable } from '@angular/core';
import { envDev } from '../env/env-dev';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = ''

  constructor() {
    this.baseUrl = envDev.pokeApi
  }

  getPokemon(name: string) {
    console.log(this.baseUrl)
  }
}
