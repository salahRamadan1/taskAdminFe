import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HOMEService {
  constructor(private _HttpClient: HttpClient) {}
  baseUrl: string = 'http://localhost:3000/';
  // to add product
  addProduct(obj: any): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'Products', obj);
  }
  // get
  getProduct(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'Products');
  }
  // delete
  deleteProduct(obj: any): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + 'Products', obj);
  }
  // get order for owner not buy until now
  getOrderForOwner(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'orders/getOrderForOwner');
  }
  // send ManDop
  sendManDop(obj: any): Observable<any> {
    return this._HttpClient.patch(this.baseUrl + 'orders/manDop', obj);
  }
  // get manDop sending
  getSendManDop(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'orders/manDop');
  }
  // get order buy
  getOrderBuy(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'orders/getOrderForOwnerBuy');
  }

  // done mony for order buy
  doneMony(obj: any): Observable<any> {
    return this._HttpClient.patch(this.baseUrl + 'orders/updateMony', obj);
  }
  // get  done mony for owner
  getDoneMony(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'orders/doneMony');
  }
  // delete all product done
  deleteAll(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + 'orders/deleteDoneMony');
  }
}
