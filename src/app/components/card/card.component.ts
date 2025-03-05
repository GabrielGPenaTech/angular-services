import { Component, Input, OnInit } from '@angular/core';
import { BadgeComponent } from "../badge/badge.component";
import type { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  imports: [BadgeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input()
  pokemonData?: PokemonData

  constructor() { }

  ngOnInit(): void {
  }
}
