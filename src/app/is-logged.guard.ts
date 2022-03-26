import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}
  
  canActivate() {
    if (!this.auth.loggedIn()) {
      return true;
    }

    this.router.navigate(['/inicio']);

    return false;
  }
  
}
