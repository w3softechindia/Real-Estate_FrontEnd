import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentaddtokenComponent } from './agentaddtoken.component';

describe('AgentaddtokenComponent', () => {
  let component: AgentaddtokenComponent;
  let fixture: ComponentFixture<AgentaddtokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentaddtokenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentaddtokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
