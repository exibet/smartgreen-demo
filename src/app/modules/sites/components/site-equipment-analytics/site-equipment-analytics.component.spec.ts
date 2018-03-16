import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEquipmentAnalyticsComponent } from './site-equipment-analytics.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../../shared/shared.module';
import * as FusionCharts from 'fusioncharts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

describe('SiteEquipmentAnalyticsComponent', () => {
  let component: SiteEquipmentAnalyticsComponent;
  let fixture: ComponentFixture<SiteEquipmentAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)
      ],
      declarations: [ SiteEquipmentAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEquipmentAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
