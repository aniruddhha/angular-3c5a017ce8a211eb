import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOwnComponent } from './my-own.component';

describe('MyOwnComponent', () => {
  let component: MyOwnComponent;
  let fixture: ComponentFixture<MyOwnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOwnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
