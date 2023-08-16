import {Component} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private oidcSecurityService: OidcSecurityService) {
  }

  login(idp: string): void {
    this.oidcSecurityService.authorize(idp);
  }
}
