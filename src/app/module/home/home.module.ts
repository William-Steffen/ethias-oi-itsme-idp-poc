import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ClientSpaceComponent } from './client-space/client-space.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ProtectedComponent } from './protected/protected.component';
import {RouterModule} from "@angular/router";
import {NbButtonModule, NbCardModule, NbLayoutModule, NbThemeModule} from "@nebular/theme";
import {HomeRoutingModule} from "./home-routing.module";
import { CallbackComponent } from './callback/callback.component';
import { RedirectEnrollmentComponent } from './redirect-enrollment/redirect-enrollment.component';



@NgModule({
  declarations: [
    HomeComponent,
    ClientSpaceComponent,
    EnrollmentComponent,
    ProtectedComponent,
    CallbackComponent,
    RedirectEnrollmentComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        NbCardModule,
        NbButtonModule,
        RouterModule,
        NbThemeModule.forRoot({name: 'corporate'}),
        HomeRoutingModule,
        NbLayoutModule,
    ]
})
export class HomeModule { }
