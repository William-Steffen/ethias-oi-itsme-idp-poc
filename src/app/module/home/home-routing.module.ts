import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {ClientSpaceComponent} from "./client-space/client-space.component";
import {EnrollmentComponent} from "./enrollment/enrollment.component";
import {ProtectedComponent} from "./protected/protected.component";
import {HomeComponent} from "./home.component";
import {CallbackComponent} from "./callback/callback.component";
import {AuthGuard} from "../../auth/auth.guard";
import {RedirectEnrollmentComponent} from "./redirect-enrollment/redirect-enrollment.component";

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'client-space',
      component: ClientSpaceComponent
    },
    {
      path: 'enrollment',
      component: EnrollmentComponent
    },
    {
      path: 'protected',
      component: ProtectedComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'callback',
      component: CallbackComponent
    },
  {
    path: 'redirect-enrollment',
    component: RedirectEnrollmentComponent
  }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
