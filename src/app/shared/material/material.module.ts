import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatPaginatorModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
