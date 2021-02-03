import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: Array<Object>
  public product$ : Observable<Product[]>;

  constructor(
    private product : ProductService,
  ) { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('cart') ?? '')
    this.products.forEach((e) => {
      this.product$ = this.product.getProductById(e['id'])
    })
   
  }

}
