import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeStageComponent } from './add-type-stage.component';

describe('AddTypeStageComponent', () => {
  let component: AddTypeStageComponent;
  let fixture: ComponentFixture<AddTypeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
