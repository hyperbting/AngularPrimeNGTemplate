import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicThemeComponent } from './public-theme.component';

describe('PublicThemeComponent', () => {
  let component: PublicThemeComponent;
  let fixture: ComponentFixture<PublicThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
