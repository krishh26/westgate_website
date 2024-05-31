import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  routelink() {
    this.router.navigateByUrl('/register')
  }

}
