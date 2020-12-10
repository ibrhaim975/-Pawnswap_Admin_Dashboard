import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  description :string ;
  title :string ;
  cat: any[];
  ref:AngularFireStorageReference;
  task:any
  id:any
  uploadProgress:Number;
  downloadURL:string
  number:BigInteger
  config: any;

  constructor(private db: AngularFireDatabase,private auth: AuthService) { 

  }

  ngOnInit(): void {
    this.db.list('features/').valueChanges().subscribe(d => {
      //ref => ref.orderByChild("isEanbled").equalTo(true)
      this.cat = d;
      console.log(d);
      this.config = {
        itemsPerPage: 4,
        currentPage: 1,
        totalItems: this.cat.length
      };
    });
 
  }
    edit(record){
    record.isEdit = true;
  
   }
    UpdateRecord(record_id) {
      let record = {};
      record['description'] = this.description;
      this.db.list('features/' + record_id).query.ref.update(record);
  
    }
    logOut(){
      this.auth.logout();
      console.log("done")
      this.auth.isloggedin = false

    }
    pageChanged(event) {
      this.config.currentPage = event;
  
    }
  }
