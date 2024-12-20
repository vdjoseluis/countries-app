import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-country-page',
  imports: [CommonModule, MatIconModule],
  templateUrl: './country-page.component.html',
})
export default class CountryPageComponent implements OnInit {
  countriesService = inject(CountriesService  )
  country?: Country;

  getFirstLanguage(country: Country): string[] {
    return Object.values(country.languages)
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByCode(id))
    )
    .subscribe(country => {
      if (!country) return this.router.navigateByUrl('');
      return this.country = country;
    })
  }
}
