import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentpostsComponent } from './agentposts.component';

describe('AgentpostsComponent', () => {
  let component: AgentpostsComponent;
  let fixture: ComponentFixture<AgentpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentpostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
