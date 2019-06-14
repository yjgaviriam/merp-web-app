import { TestBed } from '@angular/core/testing';

import { SubstationService } from './substation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SubstationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SubstationService]
  }));

  it('should be created', () => {
    const service: SubstationService = TestBed.get(SubstationService);
    expect(service).toBeTruthy();
  });
});
