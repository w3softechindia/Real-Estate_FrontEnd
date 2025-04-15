import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentmaindashboardComponent } from './agentmaindashboard.component';

describe('AgentmaindashboardComponent', () => {
  let component: AgentmaindashboardComponent;
  let fixture: ComponentFixture<AgentmaindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentmaindashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentmaindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
