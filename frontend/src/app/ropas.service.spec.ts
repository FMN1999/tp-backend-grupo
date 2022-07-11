import { TestBed } from '@angular/core/testing';

import { RopasService } from './ropas.service';

describe('RopasService', () => {
  let service: RopasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RopasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
