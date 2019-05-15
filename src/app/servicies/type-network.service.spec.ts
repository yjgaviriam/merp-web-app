import { TestBed } from '@angular/core/testing';

import { TypeNetworkService } from './type-network.service';

describe('TypeNetworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeNetworkService = TestBed.get(TypeNetworkService);
    expect(service).toBeTruthy();
  });
});
