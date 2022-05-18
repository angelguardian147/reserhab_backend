import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogcellComponent } from './logcell.component';

describe('LogcellComponent', () => {
  let component: LogcellComponent;
  let fixture: ComponentFixture<LogcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
