import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteToughtComponent } from './delete-thought.component';

describe('DeleteToughtComponent', () => {
  let component: DeleteToughtComponent;
  let fixture: ComponentFixture<DeleteToughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteToughtComponent]
    });
    fixture = TestBed.createComponent(DeleteToughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
