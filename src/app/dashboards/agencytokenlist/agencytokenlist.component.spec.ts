import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencytokenlistComponent } from './agencytokenlist.component';

describe('AgencytokenlistComponent', () => {
  let component: AgencytokenlistComponent;
  let fixture: ComponentFixture<AgencytokenlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencytokenlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencytokenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
