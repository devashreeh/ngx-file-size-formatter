import { TestBed } from '@angular/core/testing';

import { NgxFileSizeFormatterMbService } from './ngx-file-size-formatter-mb.service';

describe('NgxFileSizeFormatterMbService', () => {
  let service: NgxFileSizeFormatterMbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFileSizeFormatterMbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
