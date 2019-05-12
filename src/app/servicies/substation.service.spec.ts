import { TestBed } from '@angular/core/testing';

import { SubstationService } from './substation.service';

describe('SubstationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubstationService = TestBed.get(SubstationService);
    expect(service).toBeTruthy();
  });
});
