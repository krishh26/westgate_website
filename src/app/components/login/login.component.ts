import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Patterns } from 'src/app/core/constant/validation-patterns.const';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  defaultLoginForm = {
    email: new FormControl("", [Validators.required, Validators.pattern(Patterns.email)]),
    // password: new FormControl("", [Validators.required, Validators.pattern(Patterns.password)]),
    password: new FormControl("", [Validators.required]),
  };

  loginForm = new FormGroup(this.defaultLoginForm, []);
  tokenDecode: any;
  loginDetails: any;
  projectList: any = [];
  totalRecords: number = 0;
  showLoader: boolean = false;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.getLatestProjectList();
  }

  login(): void {
    this.loginForm.markAllAsTouched();
    console.log('adasdasdasdasd', this.loginForm.valid)
    if (this.loginForm.valid) {
      this.projectService.loginUser(this.loginForm.value).subscribe((response) => {
        console.log('response', response);
        if (response?.status == true) {
          this.localStorageService.setLoginToken(response?.data);
          this.tokenDecode = response?.data?.token;
          const decoded = jwtDecode(response?.data?.token);
          this.loginDetails = decoded;
          this.localStorageService.setLogger(this.loginDetails);
          this.router.navigateByUrl('/home');
          // setTimeout(() => {
          //   window.location.reload();
          // }, 500);
        } else {
          // this.notificationService.showError(response?.message);
        }
      }, (error) => {
        // this.notificationService.showError(error?.message || 'Something went wrong!');
      })
    }
  }

  getLatestProjectList() {

    this.projectService.projectList().subscribe((response) => {
      this.projectList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.projectList = response?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, (error) => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }

}
