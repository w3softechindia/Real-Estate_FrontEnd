import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencypropertylistComponent } from './agencypropertylist.component';

describe('AgencypropertylistComponent', () => {
  let component: AgencypropertylistComponent;
  let fixture: ComponentFixture<AgencypropertylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencypropertylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencypropertylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
