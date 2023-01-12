import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { GetOrderForOwnerBuyComponent } from './components/get-order-for-owner-buy/get-order-for-owner-buy.component';
import { GetOrderForOwnerComponent } from './components/get-order-for-owner/get-order-for-owner.component';
import { OrderComponent } from './components/order/order.component';
 import { DoneMonyComponent} from './components/done-mony/done-mony.component'
 
 
 
import { GetSendingManDopComponent } from './components/get-sending-man-dop/get-sending-man-dop.component';

const routes: Routes = [
  {path:'' ,  redirectTo:'add' , pathMatch:'full'},
  {path:'add' , component:AddComponent},
  {path:'order' , component:OrderComponent , children:[
    {path:'' ,component:GetOrderForOwnerComponent },
    {path:'getOrderForOwner' ,component:GetOrderForOwnerComponent },

    {path:'getOrderForOwnerBuy' ,component:GetOrderForOwnerBuyComponent },
    {path:'doneMony' ,component:DoneMonyComponent },
  
  
 
    {path:'getSendingManDop' ,component:GetSendingManDopComponent }






  ]


},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
