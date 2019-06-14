import { TestBed } from '@angular/core/testing';

import { EnterpriseService } from './enterprise.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EnterpriseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EnterpriseService]
  }));

  it('should be created', () => {
    const service: EnterpriseService = TestBed.get(EnterpriseService);
    expect(service).toBeTruthy();
  });
});
