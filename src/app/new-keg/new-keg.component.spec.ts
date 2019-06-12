import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKegComponent } from './new-Keg.component';

describe('NewKegComponent', () => {
  let component: NewKegComponent;
  let fixture: ComponentFixture<NewKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
