import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssuranceControlComponent } from './quality-assurance-control.component';

describe('QualityAssuranceControlComponent', () => {
  let component: QualityAssuranceControlComponent;
  let fixture: ComponentFixture<QualityAssuranceControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualityAssuranceControlComponent]
    });
    fixture = TestBed.createComponent(QualityAssuranceControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
