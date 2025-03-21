import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InboxMailComponent } from './inbox-mail.component'

describe('InboxMailComponent', () => {
  let component: InboxMailComponent
  let fixture: ComponentFixture<InboxMailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboxMailComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(InboxMailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
