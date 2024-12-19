import { Component } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-favorites',
  imports: [MatTableModule, MatSortModule],
  templateUrl: './favorites.component.html',
})
export default class FavoritesComponent {

}
