import { TestBed } from '@angular/core/testing';

import { AddJoueurService } from './add-joueur.service';

describe('AddJoueurService', () => {
  let service: AddJoueurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddJoueurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
