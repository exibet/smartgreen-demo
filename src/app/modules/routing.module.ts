import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '',   redirectTo: 'sites', pathMatch: 'full' },
  { path: 'sites', loadChildren: './sites/sites.module#SitesModule' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
