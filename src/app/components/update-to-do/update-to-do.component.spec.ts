import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateToDoComponent } from './update-to-do.component';

describe('UpdateToDoComponent', () => {
  let component: UpdateToDoComponent;
  let fixture: ComponentFixture<UpdateToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
