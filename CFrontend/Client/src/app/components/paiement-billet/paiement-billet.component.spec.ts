import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementBilletComponent } from './paiement-billet.component';

describe('PaiementBilletComponent', () => {
  let component: PaiementBilletComponent;
  let fixture: ComponentFixture<PaiementBilletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementBilletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementBilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
