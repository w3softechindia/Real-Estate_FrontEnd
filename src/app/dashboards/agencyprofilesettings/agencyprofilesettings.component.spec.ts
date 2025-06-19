import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyprofilesettingsComponent } from './agencyprofilesettings.component';

describe('AgencyprofilesettingsComponent', () => {
  let component: AgencyprofilesettingsComponent;
  let fixture: ComponentFixture<AgencyprofilesettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyprofilesettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyprofilesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
