import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentvisitlistComponent } from './agentvisitlist.component';

describe('AgentvisitlistComponent', () => {
  let component: AgentvisitlistComponent;
  let fixture: ComponentFixture<AgentvisitlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentvisitlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentvisitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
