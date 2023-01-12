import { Component, OnInit } from '@angular/core';
import { HOMEService } from 'src/app/service/home.service';

@Component({
  selector: 'app-get-sending-man-dop',
  templateUrl: './get-sending-man-dop.component.html',
  styleUrls: ['./get-sending-man-dop.component.css'],
})
export class GetSendingManDopComponent implements OnInit {
  constructor(private _HOMEService: HOMEService) {}

  ngOnInit(): void {
    this.getManDop();
  }
  date: any[] = [];
  isOne: boolean = true;
  err: string = '';
  getManDop() {
    this._HOMEService.getSendManDop().subscribe((res) => {
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
}
