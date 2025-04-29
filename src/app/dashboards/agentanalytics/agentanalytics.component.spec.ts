import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentanalyticsComponent } from './agentanalytics.component';

describe('AgentanalyticsComponent', () => {
  let component: AgentanalyticsComponent;
  let fixture: ComponentFixture<AgentanalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentanalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
