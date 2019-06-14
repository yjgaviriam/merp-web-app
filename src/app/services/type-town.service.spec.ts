import { TestBed } from '@angular/core/testing';

import { TypeTownService } from './type-town.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TypeTownService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TypeTownService]
  }));

  it('should be created', () => {
    const service: TypeTownService = TestBed.get(TypeTownService);
    expect(service).toBeTruthy();
  });
});
