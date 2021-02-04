import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Order } from '../models/order';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private API_ORDERS = 'http://localhost:3000/orders/'
  constructor(
    private http: HttpClient
  ) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.API_ORDERS);
  }

  newOrder(order: Order){
    this.http.post(this.API_ORDERS, order)
    .subscribe(
      () => alert('Sua compra foi efetuada com sucesso'),
      (err) => console.log(err) 
    );
  }


}
