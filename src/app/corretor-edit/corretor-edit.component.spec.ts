import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretorEditComponent } from './corretor-edit.component';

describe('CorretorEditComponent', () => {
  let component: CorretorEditComponent;
  let fixture: ComponentFixture<CorretorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorretorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
