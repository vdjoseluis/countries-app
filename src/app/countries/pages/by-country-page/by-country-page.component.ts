import { Component, inject, OnInit } from '@angular/core';
import SearchBoxComponent from '../../../shared/components/search-box/search-box.component';
import CountryTableComponent from '../../country-table/country-table.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchBoxComponent, CountryTableComponent, MatProgressSpinnerModule],
  templateUrl: './by-country-page.component.html',
})
export default class ByCountryPageComponent implements OnInit {

  countries: Country[] = [];
  isLoading: boolean = false;
  initialValue: string = '';

  private countriesService = inject(CountriesService);

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
