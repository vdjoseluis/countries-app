import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent implements OnInit {
  public isHomeVisible: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomeVisible = event.urlAfterRedirects === '/countries/home' || event.urlAfterRedirects === '/countries/favourites';
      }
    });
  }

}
