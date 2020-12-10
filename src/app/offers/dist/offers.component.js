"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OffersComponent = void 0;
var core_1 = require("@angular/core");
var supply_component_1 = require("src/app/supply/supply.component");
var OffersComponent = /** @class */ (function () {
    function OffersComponent(db, route, URL, location, auth) {
        this.db = db;
        this.route = route;
        this.URL = URL;
        this.location = location;
        this.auth = auth;
        this.herf = this.URL.URL;
        this.cat = [];
        this.idd = [];
        this.id = [];
        this.op = 0;
    }
    OffersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.Id;
        this.db.list('offers/' + id).valueChanges().subscribe(function (d) {
            _this.cat = d;
        });
        this.db.list('offers/' + id).snapshotChanges().subscribe(function (data) {
            data.map(function (elment) {
                _this.userid = elment.payload.val()["userId"];
                _this.db.list('users/').snapshotChanges().subscribe(function (ee) {
                    ee.map(function (emle) {
                        if (emle.payload.key == _this.userid) {
                            _this.usenname = emle.payload.val()['username'];
                            //console.log( this.usenname  )
                        }
                    });
                });
            });
        });
        this.db.list('user_supply_demand/' + id).snapshotChanges().subscribe(function (data) {
            data.map(function (elment) {
                _this.subid = elment.payload.val()["id"];
                console.log(_this.subid);
                _this.db.list('user_supply_demand/').snapshotChanges().subscribe(function (ee) {
                    ee.map(function (emle) {
                        if (emle.payload.key == _this.subid) {
                            _this.subname = emle.payload.val();
                            console.log("w" + _this.subname);
                        }
                    });
                });
            });
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.cat.length
        };
    };
    OffersComponent.prototype.onClick = function () {
        this.location.back();
    };
    OffersComponent.prototype.logOut = function () {
        this.auth.logout();
        console.log("done");
        this.auth.isloggedin = false;
    };
    OffersComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    OffersComponent = __decorate([
        core_1.Component({
            selector: 'app-offers',
            templateUrl: './offers.component.html',
            styleUrls: ['./offers.component.css'],
            providers: [supply_component_1.SupplyComponent]
        })
    ], OffersComponent);
    return OffersComponent;
}());
exports.OffersComponent = OffersComponent;
