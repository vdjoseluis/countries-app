import { Component, computed, input } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  imports: [CommonModule, RouterModule],
  templateUrl: './country-table.component.html',
  styles: `img {width: 30%}`
})
export default class CountryTableComponent {
  countries = input<Country[]>();
  countriesSortedByName = computed(() => this.countries()!.sort((a, b) => a.name.common.localeCompare(b.name.common)));
}
