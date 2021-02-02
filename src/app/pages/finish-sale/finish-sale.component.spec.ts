import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishSaleComponent } from './finish-sale.component';

describe('FinishSaleComponent', () => {
  let component: FinishSaleComponent;
  let fixture: ComponentFixture<FinishSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
