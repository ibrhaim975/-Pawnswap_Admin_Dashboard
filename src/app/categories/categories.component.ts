import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from "angularfire2/database";
import { ActivatedRoute } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import { async } from 'rxjs/internal/scheduler/async';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cat = [];
  public cats: any[];
  CaTT: Subscription
  Categories: string
  AddCategories: string;
  idd = []
  id = []
  config: any;
  counterr = []
  mySubscription: any;
vlaue :string
  op = 0
  bolo :boolean = true 
  constructor(private db: AngularFireDatabase, private auth: AuthService) {

  }

   ngOnInit(): void {


    this.CaTT = this.db.list('categories/').valueChanges().subscribe(d => {
      this.cat = d
 
    }
    )
    this.db.list('supply/').snapshotChanges().subscribe(data => {
      this.cats = data

      data.map(elemnt => {
        this.idd.push(elemnt.payload.key)

      })

      this.db.list('categories/').snapshotChanges().subscribe(d => {
        d.map(elemnt => {
          if (elemnt.payload.val()["id"] == this.idd[this.op]) {
            this.id.push(elemnt.payload.val()["id"])
            return this.op++

          }
          else {
            this.id.push(null)

          }
        })
      })

    })




    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.cat.length
    };
console.log(this.config.currentPage.next)
  }
  edit(record) {
    record.isEdit = true;

  }
  UpdateRecord(record_id) {
    let record = {};
    record['name'] = this.Categories;
    this.db.list('categories/' + record_id).query.ref.update(record);
    console.log(this.Categories)

  }

  Addc(record) {
    record.isAdd = true;

  }
  Add() {
    this.vlaue = this.Categories.replace(/ /g, '')
    console.log(this.vlaue.length)
    if(this.vlaue.length !=0){
    this.db.createPushId().charAt
    var c = this.db.list('categories/').query.ref.push({});
    var k = c.key;
    this.db.list('categories/').set(k, {
      name: this.vlaue,
      id: k,

    })
  
  }
  location.reload();

  }
  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || "").trim().length === 0;
    const isValid = !isWhitespace;
    return  (isValid ? null : { "whitespace": true });
}
deleteConfrim(record) {
  record.isdelete = true;

}
  delete(id) {
    if (id != null) {
      this.db.list('categories/' + id).remove();
      this.db.list('supply/' + id).remove();

    } else {
      alert("error occurs");
    }
   location.reload();

  }
  
  pageChanged(event) {
    this.config.currentPage = event;

  }
absoluteIndex(indexOnPage: number): number {
  return this.config.itemsPerPage * (this.config.itemsPerPage - 1) + indexOnPage;
}
}

