import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcheteurComponent } from './add-acheteur.component';

describe('AddAcheteurComponent', () => {
  let component: AddAcheteurComponent;
  let fixture: ComponentFixture<AddAcheteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAcheteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
