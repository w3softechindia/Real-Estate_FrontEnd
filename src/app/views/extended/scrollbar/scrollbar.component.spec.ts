import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ScrollbarComponent } from './scrollbar.component'

describe('ScrollbarComponent', () => {
  let component: ScrollbarComponent
  let fixture: ComponentFixture<ScrollbarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollbarComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ScrollbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
