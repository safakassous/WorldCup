import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilletListComponent } from './billet-list.component';

describe('BilletListComponent', () => {
  let component: BilletListComponent;
  let fixture: ComponentFixture<BilletListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilletListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilletListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
