import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeStageComponent } from './update-type-stage.component';

describe('UpdateTypeStageComponent', () => {
  let component: UpdateTypeStageComponent;
  let fixture: ComponentFixture<UpdateTypeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
