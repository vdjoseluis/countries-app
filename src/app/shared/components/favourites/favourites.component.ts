import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Country } from '../../../countries/interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { CountriesService } from '../../../countries/services/countries.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-favourites',
  imports: [RouterModule, CommonModule, MatIconModule, MatTooltipModule],
  templateUrl: './favourites.component.html',
  styles: `img {width: 30%}`
})
export default class favouritesComponent {
  countriesService = inject(CountriesService);
  countries: Country[] = this.countriesService.favourites.countries;

  removeFromFavourites(code: string) {
    this.countriesService.favourites.countries = this.countriesService.favourites.countries.filter(country => country.cca3 !== code);
    this.countries = this.countriesService.favourites.countries;
    localStorage.setItem('favourites', JSON.stringify(this.countriesService.favourites));
    this.openSnackBar('Country removed', 'Close');
  }

  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }


}
