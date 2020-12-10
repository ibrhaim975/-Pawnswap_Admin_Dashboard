import { Component, OnInit, inject } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireList } from 'angularfire2/database';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {

  sup: any[];
  item: any;
  URL = location.href
  cat = [];
  public cats: any[];
  catss: any[];
  IDDD: any[];
  config: any;

  Categories: string;
  AddCategories: string;
  idd = []
  idS = [];


  mySubscription: any;

  public op = 0

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private auth: AuthService) {
  }
  //private bookCounter = 0;
  ngOnInit(): void {
    const id = this.route.snapshot.params.Id;

    this.db.list('supply/' + id).valueChanges().subscribe(d => {

      this.sup = d;
     


    });


    this.db.list('offers/').snapshotChanges().subscribe(data => {
      this.cats = data

      data.map(elemnt => {
        this.idd.push(elemnt.payload.key)


      })

      console.log("offers :" + this.idd)

      this.db.list('supply/'  + id).snapshotChanges().subscribe(d => {
        d.map(elemnt => {
          if(elemnt.payload.key==this.idd[this.op]){
            this.idS.push(elemnt.payload.key) 
          }
          else {
            this.idS.push(null)
             this.op++

          }

        })
     
console.log(this.idS)
      })

    })

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.cat.length
    };
  }

  logOut() {
    this.auth.logout();
    console.log("done")
    this.auth.isloggedin = false

  }
  
  pageChanged(event) {
    this.config.currentPage = event;

  }
}
