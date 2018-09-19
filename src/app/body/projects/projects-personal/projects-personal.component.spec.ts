import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPersonalComponent } from './projects-personal.component';

describe('ProjectsPersonalComponent', () => {
  let component: ProjectsPersonalComponent;
  let fixture: ComponentFixture<ProjectsPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
