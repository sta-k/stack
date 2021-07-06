import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loading = false;
  returnUrl: string;
  user: any = {};
  errors:any;
  Object = Object;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  	const idToken = ''; // this.auth.getAccessToken();
    if (idToken) {
      this.router.navigate(['/']);
    }
  }
  onLogin(): void {
    this.loading = true;
    this.auth.login(this.user)
      .subscribe(response => {
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.errors = error;
          this.loading = false;
        }
      );
  }

}

