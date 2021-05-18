import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestOneComponent } from './rest-one.component';

describe('RestOneComponent', () => {
  let component: RestOneComponent;
  let fixture: ComponentFixture<RestOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
