import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingetpostsComponent } from './admingetposts.component';

describe('AdmingetpostsComponent', () => {
  let component: AdmingetpostsComponent;
  let fixture: ComponentFixture<AdmingetpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmingetpostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmingetpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
