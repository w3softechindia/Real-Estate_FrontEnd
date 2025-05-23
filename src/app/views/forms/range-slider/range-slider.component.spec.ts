import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RangeSliderComponent } from './range-slider.component'

describe('RangeSliderComponent', () => {
  let component: RangeSliderComponent
  let fixture: ComponentFixture<RangeSliderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeSliderComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(RangeSliderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
