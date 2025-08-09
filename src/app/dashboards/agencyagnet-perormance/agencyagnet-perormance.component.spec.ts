import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyagnetPerormanceComponent } from './agencyagnet-perormance.component';

describe('AgencyagnetPerormanceComponent', () => {
  let component: AgencyagnetPerormanceComponent;
  let fixture: ComponentFixture<AgencyagnetPerormanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyagnetPerormanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyagnetPerormanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
