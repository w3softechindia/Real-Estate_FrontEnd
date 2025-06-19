import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencycontractagreementComponent } from './agencycontractagreement.component';

describe('AgencycontractagreementComponent', () => {
  let component: AgencycontractagreementComponent;
  let fixture: ComponentFixture<AgencycontractagreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencycontractagreementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencycontractagreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
