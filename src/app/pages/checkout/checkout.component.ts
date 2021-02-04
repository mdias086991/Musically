import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { CartComponent} from '../cart/cart.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public productCart: Array<Object>;
  public product$ : Observable<Product[]>;
  public order = new Order();
  public info : any = [];

  constructor(
    private products : ProductService,
    private orders: OrderService,
    private cart: CartComponent

  ) { }

  ngOnInit(): void {
    this.info = this.cart.getProductsIntoCart();
  }

  
  newOrder(event, name, cpf, email, payment) {
      let orderItems = [ {
        "name": name,
        "email": email,
        "cpf": cpf,
        "payment": payment
        
      }
      ]

      orderItems.forEach(element => {
        this.orders.newOrder((element.cpf, element.name, element.payment));
        localStorage.clear();
        window.location.href = '/'
      });
  }

}
