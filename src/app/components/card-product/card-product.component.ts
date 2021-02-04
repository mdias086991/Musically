import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductsComponent implements OnInit {
  @Input() products = [];
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  addCart(id) {
      
      if (localStorage.getItem('cart')) {
        let value = localStorage.getItem('cart')
        let cartProducts = JSON.parse(value)
        cartProducts.push({ qte: 1, id: id})
        localStorage.setItem('cart', JSON.stringify(cartProducts))
      } else {
        localStorage.setItem('cart', JSON.stringify([{ qte: 1, id: id}]))
      }

      this.router.navigate(['/cart']);

      
  }

}
