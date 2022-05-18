import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogemailComponent } from './logemail.component';

describe('LogemailComponent', () => {
  let component: LogemailComponent;
  let fixture: ComponentFixture<LogemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
