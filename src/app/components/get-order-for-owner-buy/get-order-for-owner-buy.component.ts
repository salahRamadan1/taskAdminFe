import { Component, OnInit } from '@angular/core';
import { HOMEService } from 'src/app/service/home.service';

@Component({
  selector: 'app-get-order-for-owner-buy',
  templateUrl: './get-order-for-owner-buy.component.html',
  styleUrls: ['./get-order-for-owner-buy.component.css'],
})
export class GetOrderForOwnerBuyComponent implements OnInit {
  constructor(private _HOMEService: HOMEService) {}

  ngOnInit(): void {
    this.get();
  }
  // get
  date: any[] = [];
  isOne: boolean = true;
  err: string = '';

  get() {
    this._HOMEService.getOrderBuy().subscribe((res) => {
      console.log(res);
      if (res.message != 'success') {
        this.err = res.message;
      } else {
        this.date = res.Order;
      }
      if (res.Order.price == 1) {
        this.isOne = true;
      } else {
        this.isOne = false;
      }
    });
  }
  // update
  idPro: string = '';
  getIdPro(id: string) {
    this.idPro = id;
    console.log(this.idPro);
  }
  updateMonyOwner() {
    let data = {
      _id: this.idPro,
    };
    this._HOMEService.doneMony(data).subscribe((res) => {
      console.log(res);
      if (res.message == 'success') {
        this.get();
        this.date = [];
      }
    });
  }
}
