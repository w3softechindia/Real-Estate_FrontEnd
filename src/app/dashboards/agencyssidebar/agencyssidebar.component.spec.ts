import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyssidebarComponent } from './agencyssidebar.component';

describe('AgencyssidebarComponent', () => {
  let component: AgencyssidebarComponent;
  let fixture: ComponentFixture<AgencyssidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyssidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyssidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
