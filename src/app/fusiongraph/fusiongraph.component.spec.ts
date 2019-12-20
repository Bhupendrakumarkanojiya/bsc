import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusiongraphComponent } from './fusiongraph.component';

describe('FusiongraphComponent', () => {
  let component: FusiongraphComponent;
  let fixture: ComponentFixture<FusiongraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusiongraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusiongraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
