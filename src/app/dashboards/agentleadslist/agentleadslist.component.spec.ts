import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentleadslistComponent } from './agentleadslist.component';

describe('AgentleadslistComponent', () => {
  let component: AgentleadslistComponent;
  let fixture: ComponentFixture<AgentleadslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentleadslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentleadslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
