import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { MapsComponent } from './apis/maps/maps.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './modals/login/login.component';
import { LogcellComponent } from './modals/login/logcell/logcell.component';
import { LogemailComponent } from './modals/login/logemail/logemail.component';
import { HelpComponent } from './modals/help/help.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarSearchComponent } from './bar-search/bar-search.component';
import { DatepickerComponent } from './bar-search/datepicker/datepicker.component';
import { AddaccountComponent } from './modals/addaccount/addaccount.component';
import { AddpasswordComponent } from './modals/login/addpassword/addpassword.component';
import { ReserverComponent } from './reserver/reserver.component';
import { OwnerComponent } from './owner/owner.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHomeComponent,
    MapsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogcellComponent,
    LogemailComponent,
    HelpComponent,
    BarSearchComponent,
    DatepickerComponent,
    AddaccountComponent,
    AddpasswordComponent,
    ReserverComponent,
    OwnerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
