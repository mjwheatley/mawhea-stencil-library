import { TestBed } from '@angular/core/testing';

import { StencilLibraryAngularService } from './stencil-library-angular.service';

describe('StencilLibraryAngularService', () => {
  let service: StencilLibraryAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StencilLibraryAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
