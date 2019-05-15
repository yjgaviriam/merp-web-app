import { TestBed } from '@angular/core/testing';

import { TypeTownService } from './type-town.service';

describe('TypeTownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeTownService = TestBed.get(TypeTownService);
    expect(service).toBeTruthy();
  });
});
