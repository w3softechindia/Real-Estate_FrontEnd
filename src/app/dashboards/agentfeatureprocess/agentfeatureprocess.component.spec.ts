import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentfeatureprocessComponent } from './agentfeatureprocess.component';

describe('AgentfeatureprocessComponent', () => {
  let component: AgentfeatureprocessComponent;
  let fixture: ComponentFixture<AgentfeatureprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentfeatureprocessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentfeatureprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
