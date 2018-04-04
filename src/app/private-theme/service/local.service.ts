import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

  constructor() { }

  hasToken(name: string): boolean{
    if(!localStorage.getItem(name))
      return false;

    return true;
  }

  clearToken(name: string){
    localStorage.removeItem(name);
  }

}
