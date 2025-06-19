import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencypostlistComponent } from './agencypostlist.component';

describe('AgencypostlistComponent', () => {
  let component: AgencypostlistComponent;
  let fixture: ComponentFixture<AgencypostlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencypostlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencypostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
