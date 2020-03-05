import { TestBed } from '@angular/core/testing';

import { ProductsCollectionService } from './products-collection.service';

describe('ProductsCollectionService', () => {
  let service: ProductsCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
