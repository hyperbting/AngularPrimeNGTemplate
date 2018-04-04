import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateThemeComponent } from './private-theme.component';

describe('PrivateThemeComponent', () => {
  let component: PrivateThemeComponent;
  let fixture: ComponentFixture<PrivateThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
