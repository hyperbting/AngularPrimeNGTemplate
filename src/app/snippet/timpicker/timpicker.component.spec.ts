import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimpickerComponent } from './timpicker.component';

describe('TimpickerComponent', () => {
  let component: TimpickerComponent;
  let fixture: ComponentFixture<TimpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
