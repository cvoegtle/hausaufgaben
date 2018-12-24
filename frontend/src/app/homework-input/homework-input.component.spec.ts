import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkInputComponent } from './homework-input.component';

describe('HomeworkInputComponent', () => {
  let component: HomeworkInputComponent;
  let fixture: ComponentFixture<HomeworkInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
