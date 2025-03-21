import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BlogPhotosComponent } from './blog-photos.component'

describe('BlogPhotosComponent', () => {
  let component: BlogPhotosComponent
  let fixture: ComponentFixture<BlogPhotosComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPhotosComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(BlogPhotosComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
