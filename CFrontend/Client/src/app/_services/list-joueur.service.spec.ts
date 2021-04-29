import { TestBed } from '@angular/core/testing';

import { ListJoueurService } from './list-joueur.service';

describe('ListJoueurService', () => {
  let service: ListJoueurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListJoueurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
