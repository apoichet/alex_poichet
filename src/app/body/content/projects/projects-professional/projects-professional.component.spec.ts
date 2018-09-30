import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsProfessionalComponent } from './projects-professional.component';

describe('ProjectsProfessionalComponent', () => {
  let component: ProjectsProfessionalComponent;
  let fixture: ComponentFixture<ProjectsProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
