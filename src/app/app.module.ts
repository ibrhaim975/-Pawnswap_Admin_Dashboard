import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturesComponent } from './features/features.component';
import { OffersComponent } from './offers/offers.component';
import { SupplyComponent } from './supply/supply.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SupplyDemandComponent } from './supply-demand/supply-demand.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService as AuthGuard } from 'src/app/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http';
import { RemovewhitespacesPipe } from 'src/app/custompipe/removewhitespaces.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'Sign-in', pathMatch: 'full' },
  { path: 'Home', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'User', component: UsersComponent ,canActivate: [AuthGuard]},
  { path: 'Categories', component: CategoriesComponent ,canActivate: [AuthGuard]},
  { path: 'offers/:Id', component: OffersComponent ,canActivate: [AuthGuard] },
  { path: 'Features', component: FeaturesComponent ,canActivate: [AuthGuard] },
  { path: 'Supply/:Id', component: SupplyComponent ,canActivate: [AuthGuard]},
  { path: 'SupplyDemand/:Id', component: SupplyDemandComponent ,canActivate: [AuthGuard]},
  { path: 'signup', component: SignUpComponent ,canDeactivate: [AuthGuard]},
  { path: 'Sign-in', component: SignInComponent,},

]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CategoriesComponent,
    FeaturesComponent,
    OffersComponent,
    SupplyComponent,
    SignUpComponent,
    SupplyDemandComponent,
    SignInComponent,RemovewhitespacesPipe
  ],
  imports: [
    BrowserModule, FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes), AngularFireAuthModule
    , AngularFireAuthModule, FormsModule, BrowserAnimationsModule ,NgxPaginationModule,HttpClientModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  exports: [RouterModule]

}
