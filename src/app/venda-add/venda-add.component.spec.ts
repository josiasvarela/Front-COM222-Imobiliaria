import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaAddComponent } from './venda-add.component';

describe('VendaAddComponent', () => {
  let component: VendaAddComponent;
  let fixture: ComponentFixture<VendaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
