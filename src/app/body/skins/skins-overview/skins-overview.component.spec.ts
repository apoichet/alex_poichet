import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinsOverviewComponent } from './skins-overview.component';

describe('SkinsOverviewComponent', () => {
  let component: SkinsOverviewComponent;
  let fixture: ComponentFixture<SkinsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
