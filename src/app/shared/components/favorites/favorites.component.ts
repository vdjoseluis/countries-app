import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Country } from '../../../countries/interfaces/country.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-favorites',
  imports: [RouterModule, CommonModule],
  templateUrl: './favorites.component.html',
})
export default class FavoritesComponent {
  countries = input<Country[]>();
}
