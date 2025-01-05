import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBinding3Component } from './event-binding-3.component';

describe('EventBinding3Component', () => {
  let component: EventBinding3Component;
  let fixture: ComponentFixture<EventBinding3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventBinding3Component]
    });
    fixture = TestBed.createComponent(EventBinding3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
