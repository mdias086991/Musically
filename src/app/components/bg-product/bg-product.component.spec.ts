import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgProductComponent } from './bg-product.component';

describe('BgProductComponent', () => {
  let component: BgProductComponent;
  let fixture: ComponentFixture<BgProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
