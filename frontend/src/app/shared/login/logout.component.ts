import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  template: ''
})

export class LogoutComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    // this.auth.logout().subscribe(response => {    	
	   //  this.router.navigate(['login']);
    // });
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
