import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireList } from 'angularfire2/database';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { ActivatedRoute } from '@angular/router';
import { SupplyComponent } from 'src/app/supply/supply.component';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [SupplyComponent]
})
export class OffersComponent implements OnInit {

  herf = this.URL.URL
  cat = [];
  public cats: any[];
  catss: any[];
  Categories: string;
  AddCategories: string;
  idd = []
  id = []
  mySubscription: any;
  usenname
  subname
  op = 0
  userid
subid
config: any;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private URL: SupplyComponent, private location: Location, private auth: AuthService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.Id;


    this.db.list('offers/' + id).valueChanges().subscribe(d => {
      this.cat = d;

    })
    this.db.list('offers/' + id).snapshotChanges().subscribe(data => {
      data.map(elment => {
        this.userid = elment.payload.val()["userId"]
        this.db.list('users/').snapshotChanges().subscribe(ee => {
          ee.map(emle => {
            if (emle.payload.key == this.userid) {
              this.usenname = emle.payload.val()['username']
              //console.log( this.usenname  )

            }
          })

        })
      
      })
    })

    this.db.list('user_supply_demand/' + id).snapshotChanges().subscribe(data => {
      data.map(elment => {
        this.subid = elment.payload.val()["id"]
        console.log(this.subid)
        this.db.list('user_supply_demand/').snapshotChanges().subscribe(ee => {
          ee.map(emle => {
            if (emle.payload.key == this.subid) {
              this.subname = emle.payload.val()
              console.log( "w"+this.subname  )

            }
          })

        })
      
      })
    })
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.cat.length
    };
  }
  onClick() {
    this.location.back();
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



