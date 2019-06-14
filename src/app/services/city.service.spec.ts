import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CityService } from './city.service';

describe('CityService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CityService]
  }));

  it('should be created', () => {
    const service: CityService = TestBed.get(CityService);
    expect(service).toBeTruthy();
  });
});
