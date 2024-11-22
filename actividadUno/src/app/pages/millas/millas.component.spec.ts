import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillasComponent } from './millas.component';

describe('MillasComponent', () => {
  let component: MillasComponent;
  let fixture: ComponentFixture<MillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MillasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
