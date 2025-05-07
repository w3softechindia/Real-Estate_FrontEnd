import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentaddleadsComponent } from './agentaddleads.component';

describe('AgentaddleadsComponent', () => {
  let component: AgentaddleadsComponent;
  let fixture: ComponentFixture<AgentaddleadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentaddleadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentaddleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
