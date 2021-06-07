import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuinessComponent } from './add-buiness.component';

describe('AddBuinessComponent', () => {
  let component: AddBuinessComponent;
  let fixture: ComponentFixture<AddBuinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
