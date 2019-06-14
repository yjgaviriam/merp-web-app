import { TestBed } from '@angular/core/testing';

import { CircuitService } from './circuits.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CircuitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CircuitService]
  }));

  it('should be created', () => {
    const service: CircuitService = TestBed.get(CircuitService);
    expect(service).toBeTruthy();
  });
});
