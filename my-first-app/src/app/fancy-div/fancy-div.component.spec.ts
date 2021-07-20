import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyDivComponent } from './fancy-div.component';

describe('FancyDivComponent', () => {
  let component: FancyDivComponent;
  let fixture: ComponentFixture<FancyDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
