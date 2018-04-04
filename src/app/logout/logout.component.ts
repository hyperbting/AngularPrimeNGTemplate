import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../private-theme/service/auth.service';

@Component({
  selector: 'app-logout',
  template: '',
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private _router: Router, private _authService: AuthService) {
  }

  ngOnInit(): void {
      ////Helpers.setLoading(true);
      // reset login status
      this._authService.logout();
      console.log('logouted');
      this._router.navigate(['/login']);
  }

}
