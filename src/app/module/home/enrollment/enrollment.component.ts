import { Component } from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {

  constructor(private oidcSecurityService: OidcSecurityService) {
  }

  enroll(): void {
    this.oidcSecurityService.authorize('itsme');
  }
}
