import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencysidebarComponent } from './agencysidebar.component';

describe('AgencysidebarComponent', () => {
  let component: AgencysidebarComponent;
  let fixture: ComponentFixture<AgencysidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencysidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencysidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
