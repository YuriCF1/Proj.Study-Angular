import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoadComponent } from './button-load.component';

describe('ButtonLoadComponent', () => {
  let component: ButtonLoadComponent;
  let fixture: ComponentFixture<ButtonLoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonLoadComponent]
    });
    fixture = TestBed.createComponent(ButtonLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
