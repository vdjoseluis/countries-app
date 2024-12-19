import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'countries',
    loadComponent: () => import('./shared/components/dashboard/dashboard.component'),
    children: [
      {
        path: 'by-capital',
        title: 'By Capital',
        loadComponent: () => import('./countries/pages/by-capital-page/by-capital-page.component')
      },
      {
        path: 'by-country',
        title: 'By Country',
        loadComponent: () => import('./countries/pages/by-country-page/by-country-page.component')
      },
      {
        path: 'by-region',
        title: 'By Region',
        loadComponent: () => import('./countries/pages/by-region-page/by-region-page.component')
      },
      {
        path: 'country/:id',
        title: 'Country',
        loadComponent: () => import('./countries/pages/country-page/country-page.component')
      },
      {
        path: 'home',
        title: 'Countries App',
        loadComponent: () => import('./shared/components/home/home.component')
      },
      {
        path: 'favorites',
        title: 'Favorites',
        loadComponent: () => import('./shared/components/favorites/favorites.component')
      }
    ]
  },
  {
    path: '',
    redirectTo: 'countries/home',
    pathMatch: 'full'
  }
];
