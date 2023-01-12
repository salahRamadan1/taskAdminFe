import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddComponent } from './components/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './components/order/order.component';
import { GetOrderForOwnerComponent } from './components/get-order-for-owner/get-order-for-owner.component';
import { GetOrderForOwnerBuyComponent } from './components/get-order-for-owner-buy/get-order-for-owner-buy.component';
import { DoneMonyComponent } from './components/done-mony/done-mony.component';

import { GetSendingManDopComponent } from './components/get-sending-man-dop/get-sending-man-dop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddComponent,
    OrderComponent,
    GetOrderForOwnerComponent,
    GetOrderForOwnerBuyComponent,
    DoneMonyComponent,

    GetSendingManDopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
