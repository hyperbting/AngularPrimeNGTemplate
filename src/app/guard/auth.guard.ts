import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocalService } from '../private-theme/service/local.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private lService: LocalService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //// check if token stored
    if(!this.lService.hasToken("ACExpire"))
      return false;

    //// check if scpoe token stored
    if(!this.lService.hasToken("Scopes"))
    return false;

    //// TODO: other checks

    return true;
  }
}
