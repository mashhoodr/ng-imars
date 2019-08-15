import { TestBed } from '@angular/core/testing';

import { WpheadlessService } from './wpheadless.service';

describe('WpheadlessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WpheadlessService = TestBed.get(WpheadlessService);
    expect(service).toBeTruthy();
  });
});
