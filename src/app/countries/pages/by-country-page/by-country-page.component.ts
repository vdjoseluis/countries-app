import { Component, inject, OnInit } from '@angular/core';
import SearchBoxComponent from '../../../shared/components/search-box/search-box.component';
import CountryTableComponent from '../../country-table/country-table.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
})
export default class ByCountryPageComponent implements OnInit {

  countries: Country[] = [];
  initialValue: string = '';

  private countriesService = inject(CountriesService);

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe(countries => {
      this.countries = countries;
    });
  }
}
