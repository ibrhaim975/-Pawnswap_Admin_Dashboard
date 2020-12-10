"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SupplyDemandComponent = void 0;
var core_1 = require("@angular/core");
var SupplyDemandComponent = /** @class */ (function () {
    function SupplyDemandComponent(db, route, auth) {
        this.db = db;
        this.route = route;
        this.auth = auth;
        this.cat = [];
    }
    SupplyDemandComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.Id;
        this.db.list('user_supply_demand/' + id).valueChanges().subscribe(function (d) {
            _this.cat = d;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.cat.length
        };
    };
    SupplyDemandComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    SupplyDemandComponent = __decorate([
        core_1.Component({
            selector: 'app-supply-demand',
            templateUrl: './supply-demand.component.html',
            styleUrls: ['./supply-demand.component.css']
        })
    ], SupplyDemandComponent);
    return SupplyDemandComponent;
}());
exports.SupplyDemandComponent = SupplyDemandComponent;
