import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEquipmentAnalyticsComponent } from './site-equipment-analytics.component';

describe('SiteEquipmentAnalyticsComponent', () => {
  let component: SiteEquipmentAnalyticsComponent;
  let fixture: ComponentFixture<SiteEquipmentAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
