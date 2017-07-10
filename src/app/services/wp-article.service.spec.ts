import { TestBed, inject } from '@angular/core/testing';

import { WpArticleService } from './wp-article.service';

describe('WpArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpArticleService]
    });
  });

  it('should be created', inject([WpArticleService], (service: WpArticleService) => {
    expect(service).toBeTruthy();
  }));
});
