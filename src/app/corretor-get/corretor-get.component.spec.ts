import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretorGetComponent } from './corretor-get.component';

describe('CorretorGetComponent', () => {
  let component: CorretorGetComponent;
  let fixture: ComponentFixture<CorretorGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorretorGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretorGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
