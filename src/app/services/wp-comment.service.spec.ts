import { TestBed, inject } from '@angular/core/testing';

import { WpCommentService } from './wp-comment.service';

describe('WpCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpCommentService]
    });
  });

  it('should be created', inject([WpCommentService], (service: WpCommentService) => {
    expect(service).toBeTruthy();
  }));
});
