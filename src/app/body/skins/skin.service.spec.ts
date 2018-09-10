import { TestBed } from '@angular/core/testing';

import { SkinService } from './skin.service';

describe('SkinServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkinService = TestBed.get(SkinService);
    expect(service).toBeTruthy();
  });
});
