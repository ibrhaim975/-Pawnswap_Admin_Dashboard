"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var auth_1 = require("@angular/fire/auth");
var angularfire2_1 = require("angularfire2");
var database_1 = require("angularfire2/database");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var environment_prod_1 = require("../environments/environment.prod");
var users_component_1 = require("./users/users.component");
var categories_component_1 = require("./categories/categories.component");
var features_component_1 = require("./features/features.component");
var offers_component_1 = require("./offers/offers.component");
var supply_component_1 = require("./supply/supply.component");
var sign_up_component_1 = require("./sign-up/sign-up.component");
var supply_demand_component_1 = require("./supply-demand/supply-demand.component");
var sign_in_component_1 = require("./sign-in/sign-in.component");
var auth_service_1 = require("src/app/services/auth.service");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_pagination_1 = require("ngx-pagination");
var http_1 = require("@angular/common/http");
var removewhitespaces_pipe_1 = require("src/app/custompipe/removewhitespaces.pipe");
var routes = [
    { path: '', redirectTo: 'Sign-in', pathMatch: 'full' },
    { path: 'Home', component: users_component_1.UsersComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'User', component: users_component_1.UsersComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'Categories', component: categories_component_1.CategoriesComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'offers/:Id', component: offers_component_1.OffersComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'Features', component: features_component_1.FeaturesComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'Supply/:Id', component: supply_component_1.SupplyComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'SupplyDemand/:Id', component: supply_demand_component_1.SupplyDemandComponent, canActivate: [auth_service_1.AuthService] },
    { path: 'signup', component: sign_up_component_1.SignUpComponent, canDeactivate: [auth_service_1.AuthService] },
    { path: 'Sign-in', component: sign_in_component_1.SignInComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                users_component_1.UsersComponent,
                categories_component_1.CategoriesComponent,
                features_component_1.FeaturesComponent,
                offers_component_1.OffersComponent,
                supply_component_1.SupplyComponent,
                sign_up_component_1.SignUpComponent,
                supply_demand_component_1.SupplyDemandComponent,
                sign_in_component_1.SignInComponent, removewhitespaces_pipe_1.RemovewhitespacesPipe
            ],
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule,
                angularfire2_1.AngularFireModule.initializeApp(environment_prod_1.environment.firebase),
                database_1.AngularFireDatabaseModule,
                router_1.RouterModule.forRoot(routes), auth_1.AngularFireAuthModule,
                auth_1.AngularFireAuthModule, forms_1.FormsModule, animations_1.BrowserAnimationsModule, ngx_pagination_1.NgxPaginationModule, http_1.HttpClientModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
