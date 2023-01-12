import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HOMEService } from 'src/app/service/home.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private _HOMEService: HOMEService) {}
  ngOnInit(): void {
    this.getPro();
  }
  // form to add Product
  formProduct: FormGroup = new FormGroup({
    productName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    productTitle: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
    productPriceFinal: new FormControl(null, Validators.required),
    product_Pic: new FormControl(null, Validators.required),
  });
  // to get img
  img: any;
  choosePhoto(event: any) {
    this.img = event.target.files[0];
    console.log(this.img);
  }
  // to send data
  errSendDate: string = '';
  successAdded: string = '';
  sendData() {
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let title = (<HTMLInputElement>document.getElementById('Title')).value;
    let price = (<HTMLInputElement>document.getElementById('price')).value;
    let fileMe = new FormData();
    fileMe.append('productName', name);
    fileMe.append('productTitle', title);
    fileMe.append('productPriceFinal', price);
    fileMe.append('product_Pic', this.img);
    (<HTMLButtonElement>document.getElementById('btnSend')).innerHTML = `
                 <div class="spinner-border text-dark" role="status">
                 <span class="visually-hidden">Loading...</span>
              </div>`;
    // send to Api
    this._HOMEService.addProduct(fileMe).subscribe((res) => {
      console.log(res);

      if (res.message == 'success') {
        this.img = null;
        (<HTMLButtonElement>document.getElementById('btnSend')).innerHTML =
          'ADD';
        this.successAdded = res.message;
        setTimeout(() => {
          (<HTMLDivElement>(
            document.getElementById('successAdded')
          )).style.display = 'none';
          (<HTMLInputElement>document.getElementById('Title')).value = '';
          (<HTMLInputElement>document.getElementById('name')).value = '';
          (<HTMLInputElement>document.getElementById('price')).value = '';
          (<HTMLInputElement>document.getElementById('img')).value = '';
        }, 500);
        this.getPro();
      } else {
        (<HTMLButtonElement>document.getElementById('btnSend')).innerHTML =
          'ADD';
        this.errSendDate = res.msg;
      }
    });
  }
  /********************/

  // to get product
  data: any[] = [];
  errGetPro: string = '';
  getPro() {
    this._HOMEService.getProduct().subscribe((res) => {
      if (res.message == 'success') {
        this.data = res.isProd;
      }
    });
  }
  // delete Product

  deletePro(id: string) {
    let data = { _id: id };
    this._HOMEService.deleteProduct(data).subscribe((res) => {
      if (res.message == 'success') {
        this.getPro();
      }
    });
  }
  // slide
  openNav() {
    (<HTMLDivElement>document.getElementById('mySidenav')).style.width =
      '1000px';

    (<HTMLDivElement>document.getElementById('main')).style.marginLeft =
      '250px';
  }
  closeNav() {
    (<HTMLDivElement>document.getElementById('mySidenav')).style.width = '0';
    (<HTMLDivElement>document.getElementById('main')).style.marginLeft = '0';
  }
}
