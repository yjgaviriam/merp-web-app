import { TestBed } from '@angular/core/testing';

import { TypeNetworkService } from './type-network.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TypeNetworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TypeNetworkService]
  }));

  it('should be created', () => {
    const service: TypeNetworkService = TestBed.get(TypeNetworkService);
    expect(service).toBeTruthy();
  });
});
