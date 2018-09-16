import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinsComparingComponent } from './skins-comparing.component';

describe('SkinsComparingComponent', () => {
  let component: SkinsComparingComponent;
  let fixture: ComponentFixture<SkinsComparingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinsComparingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinsComparingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
