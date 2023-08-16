import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {StateService} from "../service/state.service";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private stateService: StateService,
              private oidcSecurityService: OidcSecurityService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('---------------------------------');
    console.log(this.stateService.isAuthenticated)
    if (!this.stateService.isAuthenticated){
      this.oidcSecurityService.authorize('okta');
  }
     return true;
  }

}
