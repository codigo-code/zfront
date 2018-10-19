import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarProdcutosComponent } from './ingresar-prodcutos.component';

describe('IngresarProdcutosComponent', () => {
  let component: IngresarProdcutosComponent;
  let fixture: ComponentFixture<IngresarProdcutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarProdcutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarProdcutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
