import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsMuschelComponent } from './lets-muschel.component';

describe('LetsMuschelComponent', () => {
  let component: LetsMuschelComponent;
  let fixture: ComponentFixture<LetsMuschelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsMuschelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsMuschelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
