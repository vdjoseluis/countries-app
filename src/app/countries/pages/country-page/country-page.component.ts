import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-country-page',
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule],
  templateUrl: './country-page.component.html',
})
export default class CountryPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  countriesService = inject(CountriesService)
  country?: Country;
  borders: Country[] = [];

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
        // Obtener el país por su código desde los parámetros de la ruta
        switchMap(({ id }) =>
          this.countriesService.searchCountryByCode(id).pipe(
            map((country) => {
              if (!country) {
                this.router.navigateByUrl('');
                return null;
              }
              return country;
            })
          )
        ),
        // Si el país es válido, obtener sus fronteras
        switchMap((country) => {
          if (!country) {
            return of(null); // Finaliza el flujo si el país no existe
          }
          this.country = country; // Asigna el país al componente
          return this.countriesService.getCountriesBordersByCodes(country.borders);
        })
      )
      .subscribe({
        next: (borders) => {
          this.borders = borders || []; // Asigna las fronteras al componente
        },
        error: (err) => {
          console.error('Error al cargar los datos:', err);
          this.borders = [];
        },
      });
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
