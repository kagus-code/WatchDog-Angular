import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuinessComponent } from './edit-buiness.component';

describe('EditBuinessComponent', () => {
  let component: EditBuinessComponent;
  let fixture: ComponentFixture<EditBuinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBuinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBuinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
