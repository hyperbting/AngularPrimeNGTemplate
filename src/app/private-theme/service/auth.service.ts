import { Injectable } from '@angular/core';

import { LocalService } from './local.service';

@Injectable()
export class AuthService {

  constructor(private lService: LocalService) { }
  login()
  {
      //// get token from api server
  }

  logout(){
    //lService
    this.lService.clearToken('');
  }
}
