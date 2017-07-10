import { TestBed, inject } from '@angular/core/testing';

import { WpAuthorService } from './wp-author.service';

describe('WpAuthorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpAuthorService]
    });
  });

  it('should be created', inject([WpAuthorService], (service: WpAuthorService) => {
    expect(service).toBeTruthy();
  }));
});
