import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEquipmentComponent } from './site-equipment.component';

describe('SiteEquipmentComponent', () => {
  let component: SiteEquipmentComponent;
  let fixture: ComponentFixture<SiteEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
