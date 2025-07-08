import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignVentureComponent } from './assign-venture.component';

describe('AssignVentureComponent', () => {
  let component: AssignVentureComponent;
  let fixture: ComponentFixture<AssignVentureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignVentureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignVentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
