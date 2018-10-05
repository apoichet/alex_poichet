import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsOverviewComponent } from './skills-overview.component';

describe('SkillsOverviewComponent', () => {
  let component: SkillsOverviewComponent;
  let fixture: ComponentFixture<SkillsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
