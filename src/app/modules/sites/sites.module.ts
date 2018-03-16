import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SitesListComponent } from './components/sites-list/sites-list.component';
import { SiteEquipmentComponent } from './components/site-equipment/site-equipment.component';
import { SiteEquipmentAnalyticsComponent } from './components/site-equipment-analytics/site-equipment-analytics.component';
import { SharedModule } from '../../shared/shared.module';
import { FusionChartsModule } from 'angular4-fusioncharts';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

import { SitesService } from './services/sites.service';
import { SitesResolver } from './services/sites.resolver';

const sitesRoutes: Routes = [
  { path: '', component: SitesListComponent },
  { path: ':site',
    component: SiteEquipmentComponent,
    resolve: {
      sites: SitesResolver
    }
  },
  { path: ':site/analytics/:equipName', component: SiteEquipmentAnalyticsComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(sitesRoutes),
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)
  ],
  providers: [SitesService, SitesResolver],
  declarations: [
    SitesListComponent,
    SiteEquipmentComponent,
    SiteEquipmentAnalyticsComponent]
})
export class SitesModule { }
