import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierElgibityCriteriaComponent } from './supplier-elgibity-criteria.component';

describe('SupplierElgibityCriteriaComponent', () => {
  let component: SupplierElgibityCriteriaComponent;
  let fixture: ComponentFixture<SupplierElgibityCriteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierElgibityCriteriaComponent]
    });
    fixture = TestBed.createComponent(SupplierElgibityCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
