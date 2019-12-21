import { TestBed } from '@angular/core/testing';

import { RecipesGatewayService } from './recipes-gateway.service';

describe('RecipesGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesGatewayService = TestBed.get(RecipesGatewayService);
    expect(service).toBeTruthy();
  });
});
