import { ProjectService } from 'src/app/services/project.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Patterns } from 'src/app/core/constant/validation-patterns.const';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit, OnDestroy {
  activeStep: number = 1;
  categoryList: any = [];
  totalRecords: number = 0;
  showLoader: boolean = false;

  options = [
    { item_value: 'IT Service', item_text: 'IT Service' },
    { item_value: 'IT Product', item_text: 'IT Product' },
  ];
  categoriesOptions = [
    { item_value: 'categories1', item_text: 'Categories 1' },
    { item_value: 'categories2', item_text: 'Categories 2' },
    { item_value: 'categories3', item_text: 'Categories 3' },
  ];

  step1 = {
    companyName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern(Patterns.email)]),
    password: new FormControl("", [Validators.required,Validators.pattern(Patterns.password)]),
    name: new FormControl("", [Validators.required]),
    designation: new FormControl("", [Validators.required]),
    number: new FormControl("", [Validators.required , Validators.pattern(Patterns.mobile)]),
  };

  step2 = {
    // industry: new FormControl("", [Validators.required]),
    numberOfBranch: new FormControl("", [Validators.required]),
    registerNumber: new FormControl("",),
    mainOfficeAddress: new FormControl("", [Validators.required]),
    website: new FormControl("", [Validators.required, this.urlValidator]),
    companyContactNumber: new FormControl("", [Validators.required, Validators.pattern(Patterns.mobile)]),
    numberOfEmployees: new FormControl("", [Validators.required]),
    sector: new FormControl("", [Validators.required]),
  };

  step3 = {
    plan: new FormControl("", [Validators.required]),
  };

  step1Form = new FormGroup(this.step1, []);
  step2Form = new FormGroup(this.step2, []);
  step3Form = new FormGroup(this.step3, []);

  constructor(
    private projectService: ProjectService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    window.addEventListener('beforeunload', this.beforeUnloadHandler);
    this.getcategoryList();
  }

  // Number only validation
  NumberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  // website input validation
  urlValidator(control: any): { [key: string]: boolean } | null {
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (control.value && !urlPattern.test(control.value)) {
      return { 'invalidUrl': true };
    }
    return null;
  }

  nextStep(step: number) {
    switch (step) {
      case 1:
        this.step1Form.markAllAsTouched();
        if (this.step1Form.valid) {
          this.activeStep = 2;
        }
        break;
      case 2:
        this.step2Form.markAllAsTouched();
        if (this.step2Form.valid) {
          this.activeStep = 3;
        }
        break;
      case 3:
        if (this.step3Form.valid) {
            this.activeStep = 6;
            this.submitForm();
        }
        break;
      case 4:
        // this.activeStep = 5;
        break;
      case 5:
        // this.activeStep = 6;
        this.submitForm();
        break;
    }
  }

  submitForm() {
    const payload = {
      ...this.step1Form.value,
      ...this.step2Form.value,
      ...this.step3Form.value
    }
    console.log('payload :', payload);
    this.projectService.register(payload).subscribe((response) => {
      if (response?.status) {
        this.activeStep = 6;
      } else {

      }
    }, (error) => {

    })
  }

  backPage(activePage: number) {
    this.activeStep = Number(activePage);
  }

  skipPaymentPage(step : number) {
    this.activeStep = Number(step);
    this.submitForm();
  }

  getcategoryList() {
    this.showLoader = true;
    this.projectService.getCategoryList().subscribe((response) => {
      this.categoryList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        console.log('response?.data', response?.data);
        response?.data?.map((element : any) => {
          const data = {
            id : element?._id,
            name : element?.category
          }
          this.categoryList.push(data);
        });
        // this.categoryList = response?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, (error) => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event) {
    const payload = {
      ...this.step1Form.value,
      ...this.step2Form.value,
      ...this.step3Form.value
    }
    this.projectService.registerMailSend(payload).subscribe((response) => {
      console.log('response ', response);
    });
  }

  ngOnDestroy() {
    window.removeEventListener('beforeunload', this.beforeUnloadHandler);
  }
}
