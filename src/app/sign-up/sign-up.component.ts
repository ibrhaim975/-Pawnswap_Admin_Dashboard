import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/User.interface';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name: string;
  password: number;
  passwordConfrim: number;
  ngform
  email: string;
  errmessage: string;
  constructor(private auth: AuthService, private db: AngularFireDatabase,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(ngForm) {

    let data: User = ngForm.value
    this.auth.signup(data.email, data.password)
    .then(result => {this.db.list('Admins/').set(result.user.uid,{
      key :result.user.uid ,
      username : this.name,
      password : data.password,
      Email : data.email 
    }).then(()=>{
    this.router.navigate(["/Home"])
    })
    }
    
    )
    
      .catch(err => {
        this.errmessage = err.message

      }

      )
      this.auth.isloggedin = true

  }
}