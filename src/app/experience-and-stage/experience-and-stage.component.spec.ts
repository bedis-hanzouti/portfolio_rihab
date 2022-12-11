import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAndStageComponent } from './experience-and-stage.component';

describe('ExperienceAndStageComponent', () => {
  let component: ExperienceAndStageComponent;
  let fixture: ComponentFixture<ExperienceAndStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceAndStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAndStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
