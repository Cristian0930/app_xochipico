import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRequestLogin } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: UserRequestLogin = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.signIn(this.user).subscribe(
      resp => {
        console.log(resp);
        localStorage.setItem('token', resp.token);
        this.router.navigate(['/inicio']);
      }, error => {
        console.log(error);
      }
    )
  }

}
