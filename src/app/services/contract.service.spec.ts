import { TestBed } from '@angular/core/testing';

import { ContractService } from './contract.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ContractService]
  }));

  it('should be created', () => {
    const service: ContractService = TestBed.get(ContractService);
    expect(service).toBeTruthy();
  });
});
