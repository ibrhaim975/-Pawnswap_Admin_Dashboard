import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from "angularfire2/database";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-supply-demand',
  templateUrl: './supply-demand.component.html',
  styleUrls: ['./supply-demand.component.css']
})
export class SupplyDemandComponent implements OnInit {
  cat = [];
  item: any;
  config: any;

  constructor(private db: AngularFireDatabase,private route: ActivatedRoute,private auth: AuthService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.Id;
    this.db.list('user_supply_demand/'+id).valueChanges().subscribe(d=>{
     this.cat = d;

    })
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.cat.length
    };
  }


    pageChanged(event) {
      this.config.currentPage = event;
  
    }
}
