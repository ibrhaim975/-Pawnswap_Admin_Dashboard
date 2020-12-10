import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  cat = [];
  public cats: any[];
  catss: any[];
  Categories: string;
  AddCategories: string;
  idd = []
  idS = []
  config: any;

  mySubscription: any;

  op = 0
  constructor(private db: AngularFireDatabase, private auth: AuthService) {

  }
  ngOnInit(): void {

    const ref = this.db.list('users/').valueChanges().subscribe(d => {
      this.cat = d;


    })

    this.db.list('user_supply_demand/').snapshotChanges().subscribe(data => {
      this.cats = data

      data.map(elemnt => {
        this.idd.push(elemnt.payload.key)

      })

      this.db.list('users/').snapshotChanges().subscribe(d => {
        d.map(elemnt => {
          if (elemnt.payload.val()["userId"] == this.idd[this.op]) {
            this.idS.push(elemnt.payload.val()["userId"])
            return this.op++

          }
          else {
            this.idS.push(null)
          }
        })
      })

    })
    console.log(this.idS)
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.cat.length
    };

  }

  pageChanged(event) {
    this.config.currentPage = event;

  }


}