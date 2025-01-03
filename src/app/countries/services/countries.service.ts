import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore, Favourites } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  saveFavourite(country: Country): string {
    const countryExists = this.favourites.countries.find(favourite => favourite.cca3 === country.cca3);
    if (countryExists) return 'Country already exists !';
    this.favourites.countries = [...this.favourites.countries, country];
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
    return 'Country added to favourites';
  }

  private loadFromLocalStorage(): void {
    if (!localStorage.getItem('cacheStore') && !localStorage.getItem('favourites')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    this.favourites = JSON.parse(localStorage.getItem('favourites')!);
  }

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  public favourites: Favourites = { countries: [] };

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])),
      delay(300)
    )
  }

  searchCountryByCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null)),
      );
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/capital/${term}`)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { term, countries }),
        tap(() => this.saveToLocalStorage())
      )
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/name/${term}`)
      .pipe(
        tap(countries => this.cacheStore.byCountry = { term, countries }),
        tap(() => this.saveToLocalStorage())
      )
  }

  searchRegion(region: Region): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/region/${region}`)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { region, countries }),
        tap(() => this.saveToLocalStorage())
      )
  }

  getCountryByAlphaCode(alphaCode: string): Observable<Country> {//correcto
    const url: string = `${this.apiUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;

    return this.http.get<Country>(url)
      .pipe(
        map(country => country),
      )
  }

  getCountriesBordersByCodes(borders: string[]): Observable<Country[]> {
    if (!borders || borders.length === 0) return of([]);

    const countriesRequests: Observable<Country>[] = [];

    borders.forEach(code => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequests.push(request);
    });

    return combineLatest(countriesRequests)
  }

}
