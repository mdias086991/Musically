import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from "./product.service";
import { Product } from "./product";
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products$ : Observable<Product[]>;
  

  constructor(
    private product : ProductService,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
      this.route.params.subscribe( parametros => {
        if(parametros['id']) {
          this.products$ = this.product.getProductById(parametros['id']);
        }
      })
  }

  addCart(event, quantity) {
    this.route.params.subscribe( parametros => {
      if (localStorage.getItem('cart')) {
        let value = localStorage.getItem('cart')
        let cartProducts = JSON.parse(value)
        cartProducts.push({ qte: quantity, id: parametros['id']})
        localStorage.setItem('cart', JSON.stringify(cartProducts))
      } else {
        localStorage.setItem('cart', JSON.stringify([{ qte: quantity, id: parametros['id']}]))
      }
    })
    
  }

}
