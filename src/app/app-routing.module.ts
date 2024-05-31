import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqsComponent } from './components/faq/faqs/faqs.component';
import { OpportunitiesComponent } from './components/opportunity/opportunities/opportunities.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WorkingModalComponent } from './components/working-modal/working-modal.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FaqAboutComponent } from './components/faq/faq-about/faq-about.component';
import { CostPricingComponent } from './components/faq/cost-pricing/cost-pricing.component';
import { LegalAndComplianceComponent } from './components/faq/legal-and-compliance/legal-and-compliance.component';
import { PartnershipOpportunityComponent } from './components/faq/partnership-opportunity/partnership-opportunity.component';
import { ProjectManagementComponent } from './components/faq/project-management/project-management.component';
import { RegistrationProcessComponent } from './components/faq/registration-process/registration-process.component';
import { ServiceOfferingComponent } from './components/faq/service-offering/service-offering.component';
import { SupplierElgibityCriteriaComponent } from './components/faq/supplier-elgibity-criteria/supplier-elgibity-criteria.component';
import { SupportAndAccountManagementComponent } from './components/faq/support-and-account-management/support-and-account-management.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OpportunitiesWebDevelopmentComponent } from './components/opportunity/opportunities-web-development/opportunities-web-development.component';
import { QualityAssuranceControlComponent } from './components/opportunity/quality-assurance-control/quality-assurance-control.component';
import { GeneralComponent } from './components/faq/general/general.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'faq',
    component: FaqsComponent
  },

  // faq details component
  {
    path: 'faq/about',
    component: FaqAboutComponent
  },
  {
    path: 'faq/cost-pricing',
    component: CostPricingComponent
  },
  {
    path: 'faq/legal-and-compliance',
    component: LegalAndComplianceComponent
  },
  {
    path: 'faq/partnership-opportunity',
    component: PartnershipOpportunityComponent
  },
  {
    path: 'faq/project-management',
    component: ProjectManagementComponent
  },
  {
    path: 'faq/registration-process',
    component: RegistrationProcessComponent
  },
  {
    path: 'faq/service-offer',
    component: ServiceOfferingComponent
  },
  {
    path: 'faq/supplier-eligibility',
    component: SupplierElgibityCriteriaComponent
  },
  {
    path: 'faq/support',
    component: SupportAndAccountManagementComponent
  },
  {
    path: 'faq/general',
    component: GeneralComponent
  },
  {
    path: 'opportunities',
    component: OpportunitiesComponent
  },
  {
    path: 'opportunities/web-developer',
    component: OpportunitiesWebDevelopmentComponent
  },
  {
    path: 'opportunities/quality-assurance',
    component: QualityAssuranceControlComponent
  },
  {
    path: 'our-services',
    component: OurServicesComponent
  },
  {
    path: 'why-us',
    component: WhyUsComponent
  },
  {
    path: 'working-modal',
    component: WorkingModalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
