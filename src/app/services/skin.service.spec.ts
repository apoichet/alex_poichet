import { TestBed } from '@angular/core/testing';

import { SkillService } from './skill.service';

describe('SkillServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillService = TestBed.get(SkillService);
    expect(service).toBeTruthy();
  });
});
