import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentpropertylistComponent } from './agentpropertylist.component';

describe('AgentpropertylistComponent', () => {
  let component: AgentpropertylistComponent;
  let fixture: ComponentFixture<AgentpropertylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentpropertylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentpropertylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
