import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationAcheteurComponent } from './confirmation-acheteur.component';

describe('ConfirmationAcheteurComponent', () => {
  let component: ConfirmationAcheteurComponent;
  let fixture: ComponentFixture<ConfirmationAcheteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationAcheteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationAcheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
