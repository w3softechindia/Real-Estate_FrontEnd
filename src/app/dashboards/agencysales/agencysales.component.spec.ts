import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencysalesComponent } from './agencysales.component';

describe('AgencysalesComponent', () => {
  let component: AgencysalesComponent;
  let fixture: ComponentFixture<AgencysalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencysalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencysalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
