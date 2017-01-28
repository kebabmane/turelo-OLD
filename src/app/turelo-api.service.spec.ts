/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TureloApiService } from './turelo-api.service';

describe('TureloApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TureloApiService]
    });
  });

  it('should ...', inject([TureloApiService], (service: TureloApiService) => {
    expect(service).toBeTruthy();
  }));
});
