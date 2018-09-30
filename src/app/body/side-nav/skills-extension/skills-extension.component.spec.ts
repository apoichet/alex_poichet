import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsExtensionComponent } from './skills-extension.component';

describe('SkillsExtensionComponent', () => {
  let component: SkillsExtensionComponent;
  let fixture: ComponentFixture<SkillsExtensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsExtensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
