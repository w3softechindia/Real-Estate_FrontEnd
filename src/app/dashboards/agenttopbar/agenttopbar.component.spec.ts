import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttopbarComponent } from './agenttopbar.component';

describe('AgenttopbarComponent', () => {
  let component: AgenttopbarComponent;
  let fixture: ComponentFixture<AgenttopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenttopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenttopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
