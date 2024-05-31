import { formatDate } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { pagination } from 'src/app/core/constant/pagination.constant';
import { Payload } from 'src/app/core/constant/payload.const';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent {

  showLoader: boolean = false;
  categoryList: any = [];
  industryList: any = [];
  totalRecords: number = pagination.totalRecords;
  todayDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
  selectedValue: string = 'today';
  projectList: any = [];
  page: number = pagination.page;
  pagesize = pagination.itemsPerPage;
  content: TemplateRef<any> | undefined;
  constructor(
    private projectService: ProjectService,
    private notificationService: NotificationService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {
    this.getProjectList(this.todayDate);
  }

  ngOnInit(): void {
    // this.getcategoryList();
    // this.getindustryList();
  }

  getcategoryList() {
    this.showLoader = true;
    this.projectService.getCategoryList().subscribe((response) => {
      this.categoryList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.categoryList = response?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, (error) => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }

  getindustryList() {
    this.showLoader = true;
    this.projectService.getIndustryList().subscribe((response) => {
      this.industryList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.industryList = response?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, (error) => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }

  getProjectList(filter:string) {
    this.showLoader = true;
   Payload.projectList.createdDate = String(filter);
    Payload.projectList.page = String(this.page);
    Payload.projectList.limit = String(this.pagesize);
    Payload.projectList.applied = false;
    Payload.projectList.sortlist = false;
    this.projectService.getProjectList(Payload.projectList).subscribe((response) => {
      this.projectList = [];
      this.totalRecords = 0;
      if (response?.status == true) {
        this.showLoader = false;
        this.projectList = response?.data?.data;
      } else {
        this.notificationService.showError(response?.message);
        this.showLoader = false;
      }
    }, (error) => {
      this.notificationService.showError(error?.message);
      this.showLoader = false;
    });
  }


  radioSelected(event:any){
    this.selectedValue = event?.target?.value;
    if(this.selectedValue == 'today'){
    let todayDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
      this.getProjectList(todayDate)
    }
  }
}
