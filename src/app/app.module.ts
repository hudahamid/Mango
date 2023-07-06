import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PosSystemComponent } from './pos-system/pos-system.component';
import { CustemorComponent } from './custemor/custemor.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { OrderListComponent } from './order-list/order-list.component';
import { SearchComponent } from './search/search.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    PosSystemComponent,
    CustemorComponent,
    UserComponent,
    ProductsComponent,
    SuppliersComponent,
    OrderListComponent,
    SearchComponent,
    ReportComponent,
    SettingComponent,
    LogoutComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
