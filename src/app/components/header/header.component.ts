import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public qtd_products : Array<Object>
  constructor() { }

  ngOnInit(): void {
    this.qtd_products = JSON.parse(localStorage.getItem('cart') ?? '')
    
  }

}
