import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-country-page',
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './country-page.component.html',
})
export default class CountryPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  countriesService = inject(CountriesService)
  country?: Country;

  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getFirstLanguage(country: Country): string[] {
    return Object.values(country.languages)
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByCode(id))
      )
      .subscribe(country => {
        if (!country) return this.router.navigateByUrl('');
        return this.country = country;
      })
  }

  isImageLoading: boolean = true;
  onImageLoad(): void {
    this.isImageLoading = false;
  }

  onImageError(): void {
    this.isImageLoading = false;
  }

  addToFavourites(country: Country): void {
    let message: string = this.countriesService.saveFavourite(country) || 'Unable to add country';
    this.openSnackBar(message, 'Close');
  }

}
