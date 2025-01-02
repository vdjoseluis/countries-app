import { Component, inject, OnInit } from '@angular/core';
import SearchBoxComponent from '../../../shared/components/search-box/search-box.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import CountryTableComponent from '../../country-table/country-table.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-by-capital-page',
  imports: [SearchBoxComponent, CountryTableComponent, MatProgressSpinnerModule],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPageComponent implements OnInit {

  countries: Country[] = [];
  isLoading: boolean = false;
  initialValue: string = '';

  private countriesService = inject(CountriesService);

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
