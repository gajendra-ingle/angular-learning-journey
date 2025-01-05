import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBinding2Component } from './event-binding-2.component';

describe('EventBinding2Component', () => {
  let component: EventBinding2Component;
  let fixture: ComponentFixture<EventBinding2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventBinding2Component]
    });
    fixture = TestBed.createComponent(EventBinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
