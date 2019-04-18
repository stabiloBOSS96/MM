import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMuschelComponent } from './play-muschel.component';

describe('PlayMuschelComponent', () => {
  let component: PlayMuschelComponent;
  let fixture: ComponentFixture<PlayMuschelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayMuschelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayMuschelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
