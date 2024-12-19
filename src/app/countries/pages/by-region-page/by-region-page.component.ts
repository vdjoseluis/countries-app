import { Component, inject, OnInit } from '@angular/core';
import CountryTableComponent from '../../country-table/country-table.component';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryTableComponent],
  templateUrl: './by-region-page.component.html',
})
export default class ByRegionPageComponent implements OnInit {

  countries: Country[] = [];
  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion?: Region;

  private countriesService = inject(CountriesService);

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe(countries => {
      this.countries = countries;
    });
  }

}
