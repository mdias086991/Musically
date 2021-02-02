import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarInformationComponent } from './bar-information.component';

describe('BarInformationComponent', () => {
  let component: BarInformationComponent;
  let fixture: ComponentFixture<BarInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
