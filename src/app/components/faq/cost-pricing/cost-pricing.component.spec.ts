import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostPricingComponent } from './cost-pricing.component';

describe('CostPricingComponent', () => {
  let component: CostPricingComponent;
  let fixture: ComponentFixture<CostPricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostPricingComponent]
    });
    fixture = TestBed.createComponent(CostPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
