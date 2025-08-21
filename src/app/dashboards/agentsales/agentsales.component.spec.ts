import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsalesComponent } from './agentsales.component';

describe('AgentsalesComponent', () => {
  let component: AgentsalesComponent;
  let fixture: ComponentFixture<AgentsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentsalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
