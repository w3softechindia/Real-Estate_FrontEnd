import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentaddvisitsComponent } from './agentaddvisits.component';

describe('AgentaddvisitsComponent', () => {
  let component: AgentaddvisitsComponent;
  let fixture: ComponentFixture<AgentaddvisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentaddvisitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentaddvisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
