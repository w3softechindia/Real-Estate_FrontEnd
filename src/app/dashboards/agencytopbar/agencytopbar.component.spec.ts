import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencytopbarComponent } from './agencytopbar.component';

describe('AgencytopbarComponent', () => {
  let component: AgencytopbarComponent;
  let fixture: ComponentFixture<AgencytopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencytopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencytopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
