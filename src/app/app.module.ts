import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { OpportunitiesComponent } from './components/opportunity/opportunities/opportunities.component';
import { WorkingModalComponent } from './components/working-modal/working-modal.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { FaqsComponent } from './components/faq/faqs/faqs.component';
import { FaqAboutComponent } from './components/faq/faq-about/faq-about.component';
import { CostPricingComponent } from './components/faq/cost-pricing/cost-pricing.component';
import { LegalAndComplianceComponent } from './components/faq/legal-and-compliance/legal-and-compliance.component';
import { RegistrationProcessComponent } from './components/faq/registration-process/registration-process.component';
import { PartnershipOpportunityComponent } from './components/faq/partnership-opportunity/partnership-opportunity.component';
import { ProjectManagementComponent } from './components/faq/project-management/project-management.component';
import { ServiceOfferingComponent } from './components/faq/service-offering/service-offering.component';
import { SupplierElgibityCriteriaComponent } from './components/faq/supplier-elgibity-criteria/supplier-elgibity-criteria.component';
import { SupportAndAccountManagementComponent } from './components/faq/support-and-account-management/support-and-account-management.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { QualityAssuranceControlComponent } from './components/opportunity/quality-assurance-control/quality-assurance-control.component';
import { OpportunitiesWebDevelopmentComponent } from './components/opportunity/opportunities-web-development/opportunities-web-development.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GeneralComponent } from './components/faq/general/general.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { APIInterceptor } from './core/interceptor/ApiInterceptor';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    WhyUsComponent,
    OpportunitiesComponent,
    WorkingModalComponent,
    OurServicesComponent,
    FaqsComponent,
    FaqAboutComponent,
    CostPricingComponent,
    LegalAndComplianceComponent,
    RegistrationProcessComponent,
    PartnershipOpportunityComponent,
    ProjectManagementComponent,
    ServiceOfferingComponent,
    SupplierElgibityCriteriaComponent,
    SupportAndAccountManagementComponent,
    LoginComponent,
    RegisterComponent,
    QualityAssuranceControlComponent,
    OpportunitiesWebDevelopmentComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:APIInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
