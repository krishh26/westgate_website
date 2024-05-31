import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOfferingComponent } from './service-offering.component';

describe('ServiceOfferingComponent', () => {
  let component: ServiceOfferingComponent;
  let fixture: ComponentFixture<ServiceOfferingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOfferingComponent]
    });
    fixture = TestBed.createComponent(ServiceOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
