import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductsComponent implements OnInit {
  @Input() products = [];
  constructor() { }

  ngOnInit(): void {
  }

}
