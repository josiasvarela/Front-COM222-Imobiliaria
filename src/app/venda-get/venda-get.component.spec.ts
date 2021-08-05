import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaGetComponent } from './venda-get.component';

describe('VendaGetComponent', () => {
  let component: VendaGetComponent;
  let fixture: ComponentFixture<VendaGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
