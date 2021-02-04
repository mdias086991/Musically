import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class CartComponent implements OnInit {
  public products: Array<Object>
  public product$ : Observable<Product[]>;
  public productInfo : any;
  

  constructor(
    private product : ProductService,
  ) { }

  ngOnInit(): void {
    this.productInfo = this.getProductsIntoCart()
    console.log(this.productInfo);
   
  }

  getProductsIntoCart() {
    this.products = JSON.parse(localStorage.getItem('cart') ?? '')
    let arrProduct = [];
    this.products.forEach((e) => {
     this.product.getProductById(e['id']).subscribe((res) => { arrProduct.push([res, e['qte']]);})
    })
    return arrProduct;
  }

}
