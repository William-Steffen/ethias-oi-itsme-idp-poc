import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {


  private _isAuthenticated: boolean = false;

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }
}
