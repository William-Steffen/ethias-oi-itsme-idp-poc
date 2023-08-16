import {Component, OnInit} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {StateService} from "../../../service/state.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  private readonly idp: string | null;

  constructor(private oidcSecurityService: OidcSecurityService,
              private stateService: StateService,
              private activatedRoute: ActivatedRoute) {
    this.idp = this.activatedRoute.snapshot.queryParamMap.get('idp');
  }

  ngOnInit(): void {

    if (this.idp != null) {
      this
        .oidcSecurityService
        .checkAuth(undefined, this.idp)
        .subscribe(({isAuthenticated, userData, accessToken, idToken, configId}) => {
          console.log(isAuthenticated);
          console.log(userData);
          console.log(accessToken);
          console.log(idToken);
          console.log(configId);

          this.stateService.isAuthenticated = isAuthenticated;
        });
    }
  }
}
