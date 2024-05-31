import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAboutComponent } from './faq-about.component';

describe('FaqAboutComponent', () => {
  let component: FaqAboutComponent;
  let fixture: ComponentFixture<FaqAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqAboutComponent]
    });
    fixture = TestBed.createComponent(FaqAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
