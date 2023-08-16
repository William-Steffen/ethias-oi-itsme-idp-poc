import {NgModule} from '@angular/core';
import {AuthModule, LogLevel} from 'angular-auth-oidc-client';


@NgModule({
  imports: [AuthModule.forRoot({
    config:[
      {
        configId: 'okta',
        authWellknownEndpointUrl: 'https://ethias-dev.oktapreview.com/oauth2/default/.well-known/openid-configuration',
        authority: 'https://ethias-dev.oktapreview.com/oauth2/default/v1',
        redirectUrl: `${window.location.origin}/callback?idp=okta`,
        postLoginRoute: '/protected',
        postLogoutRedirectUri: window.location.origin,
        clientId: '0oa5jme3ud4qhUNo80x7',
        scope: 'openid profile offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30,
      },
      {
        configId: 'itsme',
        authWellknownEndpointUrl: 'https://ethias-dev.oktapreview.com/oauth2/default/.well-known/openid-configuration',
        authority: 'https://ethias-dev.oktapreview.com/oauth2/v1/authorize',
        customParamsAuthRequest: {
          idp: '0oa52auhxhrjkH3Yk0x7',
          idp_scope: 'ui_locales:fr',
        },
        redirectUrl: `${window.location.origin}/callback?idp=itsme`,
        postLoginRoute: '/protected',
        postLogoutRedirectUri: window.location.origin,
        clientId: '0oa5jme3ud4qhUNo80x7',
        scope: 'openid', // 'openid profile offline_access ' + your scopes
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30,
        logLevel: LogLevel.Debug,
      }
    ]
  })],
  exports: [AuthModule],
})
export class AuthConfigModule {
}
