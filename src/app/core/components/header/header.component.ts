import { LocalStorageService } from './../../../services/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginUser: any;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.loginUser = this.localStorageService.getLogger();
  }

  logOut() {
    this.localStorageService.clearStorage();
    window.location.reload();
  }
}
