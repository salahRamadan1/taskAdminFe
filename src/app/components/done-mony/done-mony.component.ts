import { Component, OnInit } from '@angular/core';
import { HOMEService } from 'src/app/service/home.service';

@Component({
  selector: 'app-done-mony',
  templateUrl: './done-mony.component.html',
  styleUrls: ['./done-mony.component.css'],
})
export class DoneMonyComponent implements OnInit {
  constructor(private _HOMEService: HOMEService) {}

  ngOnInit(): void {
    this.get();
  }
  date: any[] = [];
  isOne: boolean = true;
  err: string = '';
  total: number = 0;
  get() {
    this._HOMEService.getDoneMony().subscribe((res) => {
      if (res.message != 'success') {
        this.err = res.message;
        (<HTMLButtonElement>document.getElementById('btn')).style.display =
          'none';
        (<HTMLButtonElement>document.getElementById('price')).style.display =
          'none';
      } else {
        this.date = res.Order;
        for (let i = 0; i < this.date.length; i++) {
          console.log(this.date[i].productOrder.productPriceFinal);
          this.total = this.total + this.date[i].productOrder.productPriceFinal;
        }
      }
      if (res.Order.price == 1) {
        this.isOne = true;
      } else {
        this.isOne = false;
      }
    });
  }
  deleteAllPro() {
    this._HOMEService.deleteAll().subscribe((res) => {
      if (res.message == 'success') {
        this.get();
        this.date = [];
        this.total = 0;
      }
    });
  }
}
