import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencySoldListComponent } from './agency-sold-list.component';

describe('AgencySoldListComponent', () => {
  let component: AgencySoldListComponent;
  let fixture: ComponentFixture<AgencySoldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencySoldListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencySoldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
