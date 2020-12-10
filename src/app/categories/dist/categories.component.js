"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoriesComponent = void 0;
var core_1 = require("@angular/core");
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(db, auth) {
        this.db = db;
        this.auth = auth;
        this.cat = [];
        this.idd = [];
        this.id = [];
        this.counterr = [];
        this.op = 0;
        this.bolo = true;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CaTT = this.db.list('categories/').valueChanges().subscribe(function (d) {
            _this.cat = d;
        });
        this.db.list('supply/').snapshotChanges().subscribe(function (data) {
            _this.cats = data;
            data.map(function (elemnt) {
                _this.idd.push(elemnt.payload.key);
            });
            _this.db.list('categories/').snapshotChanges().subscribe(function (d) {
                d.map(function (elemnt) {
                    if (elemnt.payload.val()["id"] == _this.idd[_this.op]) {
                        _this.id.push(elemnt.payload.val()["id"]);
                        return _this.op++;
                    }
                    else {
                        _this.id.push(null);
                    }
                });
            });
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.cat.length
        };
        console.log(this.config.currentPage.next);
    };
    CategoriesComponent.prototype.edit = function (record) {
        record.isEdit = true;
    };
    CategoriesComponent.prototype.UpdateRecord = function (record_id) {
        var record = {};
        record['name'] = this.Categories;
        this.db.list('categories/' + record_id).query.ref.update(record);
        console.log(this.Categories);
    };
    CategoriesComponent.prototype.Addc = function (record) {
        record.isAdd = true;
    };
    CategoriesComponent.prototype.Add = function () {
        this.vlaue = this.Categories.replace(/ /g, '');
        console.log(this.vlaue.length);
        if (this.vlaue.length != 0) {
            this.db.createPushId().charAt;
            var c = this.db.list('categories/').query.ref.push({});
            var k = c.key;
            this.db.list('categories/').set(k, {
                name: this.vlaue,
                id: k
            });
        }
        location.reload();
    };
    CategoriesComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || "").trim().length === 0;
        var isValid = !isWhitespace;
        return (isValid ? null : { "whitespace": true });
    };
    CategoriesComponent.prototype.deleteConfrim = function (record) {
        record.isdelete = true;
    };
    CategoriesComponent.prototype["delete"] = function (id) {
        if (id != null) {
            this.db.list('categories/' + id).remove();
            this.db.list('supply/' + id).remove();
        }
        else {
            alert("error occurs");
        }
        location.reload();
    };
    CategoriesComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    CategoriesComponent.prototype.absoluteIndex = function (indexOnPage) {
        return this.config.itemsPerPage * (this.config.itemsPerPage - 1) + indexOnPage;
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'app-categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.css']
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
