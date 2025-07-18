import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttokenlistComponent } from './agenttokenlist.component';

describe('AgenttokenlistComponent', () => {
  let component: AgenttokenlistComponent;
  let fixture: ComponentFixture<AgenttokenlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenttokenlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenttokenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
