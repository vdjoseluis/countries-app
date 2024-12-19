import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  public isHomeVisible = input.required<boolean>();

  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => !route.path?.includes(':') && !route.path?.includes('home') && !route.path?.includes('favorites'));
}
