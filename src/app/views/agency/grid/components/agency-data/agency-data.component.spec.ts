import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AgentDataComponent } from './agency-data.component'

describe('AgentDataComponent', () => {
  let component: AgentDataComponent
  let fixture: ComponentFixture<AgentDataComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentDataComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AgentDataComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
