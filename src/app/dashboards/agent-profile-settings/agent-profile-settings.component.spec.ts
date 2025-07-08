import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentProfileSettingsComponent } from './agent-profile-settings.component';

describe('AgentProfileSettingsComponent', () => {
  let component: AgentProfileSettingsComponent;
  let fixture: ComponentFixture<AgentProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentProfileSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
