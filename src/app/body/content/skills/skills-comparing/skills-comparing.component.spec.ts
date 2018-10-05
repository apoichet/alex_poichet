import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComparingComponent } from './skills-comparing.component';

describe('SkillsComparingComponent', () => {
  let component: SkillsComparingComponent;
  let fixture: ComponentFixture<SkillsComparingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsComparingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComparingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
