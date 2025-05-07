import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyagentslistComponent } from './agencyagentslist.component';

describe('AgencyagentslistComponent', () => {
  let component: AgencyagentslistComponent;
  let fixture: ComponentFixture<AgencyagentslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyagentslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyagentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
