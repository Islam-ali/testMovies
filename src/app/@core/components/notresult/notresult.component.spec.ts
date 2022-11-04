import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotresultComponent } from './notresult.component';

describe('NotresultComponent', () => {
  let component: NotresultComponent;
  let fixture: ComponentFixture<NotresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
