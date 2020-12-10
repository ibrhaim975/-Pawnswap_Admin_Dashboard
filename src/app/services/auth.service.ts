import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsersComponent } from '../users/users.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedin = false
  redirectUrl: string;
  isLog: boolean = false;
errmeage 
  constructor(public afathu: AngularFireAuth, private router: Router) {
    this.router = router;
    afathu.user.subscribe(userr => {
      if (userr) this.isLog = true
    })
  }




  async signup(email: string, password: string) {
    return this.afathu.auth.createUserWithEmailAndPassword(email, password)

  }
  async signin(email: string, password: string) {
    return this.afathu.auth.signInWithEmailAndPassword(email, password)
     
     
  }
  logout() {

    this.afathu.auth.signOut()
    localStorage.removeItem('user')
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot,) {
    if (!localStorage.getItem('LoggedIn')) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }



}



