import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public productCart: Array<Object>;
  public product$ : Observable<Product[]>;
  public order = new Order();

  constructor(
    private products : ProductService,
    private orders: OrderService
  ) { }

  ngOnInit(): void {
    this.productCart = JSON.parse(localStorage.getItem('cart') ?? '')
    this.productCart.forEach((e) => {
      this.product$ = this.products.getProductById(e['id'])
    })
  }

  newOrder(name, cpf, email, payment, productId, quantity) {
      let orderItems = [ {
        "name": name,
        "email": email,
        "cpf": cpf,
        "payment": payment,
        "items": [
          {
            "id" : productId
          }
        ]
      }
      ]

      orderItems.forEach(element => {
        this.orders.newOrder((element.cpf, element.items, element.name, element.payment));
      });
  }

}
