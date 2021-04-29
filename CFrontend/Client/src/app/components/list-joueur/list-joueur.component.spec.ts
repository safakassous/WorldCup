import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJoueurComponent } from './list-joueur.component';

describe('ListJoueurComponent', () => {
  let component: ListJoueurComponent;
  let fixture: ComponentFixture<ListJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
