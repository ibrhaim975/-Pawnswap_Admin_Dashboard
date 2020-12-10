"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SupplyComponent = void 0;
var core_1 = require("@angular/core");
var SupplyComponent = /** @class */ (function () {
    function SupplyComponent(db, route, auth) {
        this.db = db;
        this.route = route;
        this.auth = auth;
        this.URL = location.href;
        this.cat = [];
        this.idd = [];
        this.idS = [];
        this.op = 0;
    }
    //private bookCounter = 0;
    SupplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.Id;
        this.db.list('supply/' + id).valueChanges().subscribe(function (d) {
            _this.sup = d;
        });
        this.db.list('offers/').snapshotChanges().subscribe(function (data) {
            _this.cats = data;
            data.map(function (elemnt) {
                _this.idd.push(elemnt.payload.key);
            });
            console.log("offers :" + _this.idd);
            _this.db.list('supply/' + id).snapshotChanges().subscribe(function (d) {
                d.map(function (elemnt) {
                    if (elemnt.payload.key == _this.idd[_this.op]) {
                        _this.idS.push(elemnt.payload.key);
                    }
                    else {
                        _this.idS.push(null);
                        _this.op++;
                    }
                });
                console.log(_this.idS);
            });
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.cat.length
        };
    };
    SupplyComponent.prototype.logOut = function () {
        this.auth.logout();
        console.log("done");
        this.auth.isloggedin = false;
    };
    SupplyComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    SupplyComponent = __decorate([
        core_1.Component({
            selector: 'app-supply',
            templateUrl: './supply.component.html',
            styleUrls: ['./supply.component.css']
        })
    ], SupplyComponent);
    return SupplyComponent;
}());
exports.SupplyComponent = SupplyComponent;
