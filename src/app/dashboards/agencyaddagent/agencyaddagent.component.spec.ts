import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyaddagentComponent } from './agencyaddagent.component';

describe('AgencyaddagentComponent', () => {
  let component: AgencyaddagentComponent;
  let fixture: ComponentFixture<AgencyaddagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyaddagentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyaddagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
