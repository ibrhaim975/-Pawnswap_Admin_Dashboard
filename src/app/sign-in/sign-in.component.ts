import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/services/User.interface';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  password: number;
  ngform
  email: string;
  errmessage: string;
  loged: boolean;

  constructor(private auth: AuthService, private router: Router, applogin: AppComponent) { }
  ngOnInit(): void {

    this.auth.afathu.user.subscribe(ussers => {
      if (ussers)
        this.router.navigate(['/Home']);

    })

  }
  onSubmit(ngForm) {

    let data: User = ngForm.value
    this.auth.signin(data.email, data.password).catch(err=>{
      if(err){
        this.errmessage="Invaild login"
      }
    })

    this.auth.afathu.user.subscribe(isloge => {
      if (isloge) {
        this.router.navigate(['/Home'])
        this.auth.isloggedin = true
        localStorage.setItem('LoggedIn', 'true')

      }
    })

    
  }

}
