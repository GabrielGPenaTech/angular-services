import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { envDev } from "../../env/env-dev";
import type { Observable } from "rxjs";
import type { PokemonData } from "../../models/pokemonData";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = ''

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = envDev.pokeApi
  }

  getPokemon(name: string): Observable<PokemonData> {
    const data = this.http.get<PokemonData>(this.baseUrl + name)
    return data
  }
}
