import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentreviewComponent } from './agentreview.component';

describe('AgentreviewComponent', () => {
  let component: AgentreviewComponent;
  let fixture: ComponentFixture<AgentreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
