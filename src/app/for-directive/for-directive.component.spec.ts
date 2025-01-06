import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDirectiveComponent } from './for-directive.component';

describe('ForDirectiveComponent', () => {
  let component: ForDirectiveComponent;
  let fixture: ComponentFixture<ForDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForDirectiveComponent]
    });
    fixture = TestBed.createComponent(ForDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
