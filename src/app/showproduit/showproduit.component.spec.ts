import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproduitComponent } from './showproduit.component';

describe('ShowproduitComponent', () => {
  let component: ShowproduitComponent;
  let fixture: ComponentFixture<ShowproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowproduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
