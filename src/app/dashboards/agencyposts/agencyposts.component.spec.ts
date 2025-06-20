import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencypostsComponent } from './agencyposts.component';

describe('AgencypostsComponent', () => {
  let component: AgencypostsComponent;
  let fixture: ComponentFixture<AgencypostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencypostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencypostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
