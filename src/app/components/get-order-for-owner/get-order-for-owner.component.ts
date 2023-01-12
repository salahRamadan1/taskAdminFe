import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HOMEService } from 'src/app/service/home.service';

@Component({
  selector: 'app-get-order-for-owner',
  templateUrl: './get-order-for-owner.component.html',
  styleUrls: ['./get-order-for-owner.component.css'],
})
export class GetOrderForOwnerComponent implements OnInit {
  constructor(private _HOMEService: HOMEService) {}

  ngOnInit(): void {
    this.getPro();
  }
  // get Orders
  date: any[] = [];
  isOne: boolean = true;
  err: string = '';
  getPro() {
    this._HOMEService.getOrderForOwner().subscribe((res) => {
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
  //  manDop
  formManDop: FormGroup = new FormGroup({
    manDop: new FormControl(null, Validators.required),
  });
  idOrder: string = '';
  getIdOrder(id: string) {
    this.idOrder = id;
  }
  sendManDop() {
    console.log(this.formManDop.value);
    let date = {
      _id: this.idOrder,
      manDop: this.formManDop.value.manDop,
    };
    this._HOMEService.sendManDop(date).subscribe((res) => {
      if (res.message == 'success') {
        this.getPro();
        this.date = [];
      } else {
        alert(res.message);
      }
    });
  }
}
