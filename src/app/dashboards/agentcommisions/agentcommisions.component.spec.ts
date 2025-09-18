import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentcommisionsComponent } from './agentcommisions.component';

describe('AgentcommisionsComponent', () => {
  let component: AgentcommisionsComponent;
  let fixture: ComponentFixture<AgentcommisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentcommisionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentcommisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
