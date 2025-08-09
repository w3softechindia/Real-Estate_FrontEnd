import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyRevenueComponent } from './agency-revenue.component';

describe('AgencyRevenueComponent', () => {
  let component: AgencyRevenueComponent;
  let fixture: ComponentFixture<AgencyRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyRevenueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
