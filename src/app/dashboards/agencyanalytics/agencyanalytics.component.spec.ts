import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyanalyticsComponent } from './agencyanalytics.component';

describe('AgencyanalyticsComponent', () => {
  let component: AgencyanalyticsComponent;
  let fixture: ComponentFixture<AgencyanalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyanalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
