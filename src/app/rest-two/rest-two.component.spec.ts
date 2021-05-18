import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestTwoComponent } from './rest-two.component';

describe('RestTwoComponent', () => {
  let component: RestTwoComponent;
  let fixture: ComponentFixture<RestTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
