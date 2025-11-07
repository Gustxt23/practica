import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Products } from './products';  // import del componente real

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Products]  // ✅ aquí va en declarations, no imports
    }).compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

