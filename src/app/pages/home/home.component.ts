import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products$ : Observable<Product[]>
  public productById$ : Observable<Product[]>
  public textProduct : string;

  constructor(
    private products : ProductService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
      if(parametros['category_id']) {
        // console.log(parametros['category_id'])
        this.products$ = this.products.getProductsByCategory(parametros['category_id']);
        this.textProduct = parametros['category_id'];
      } else {
        this.textProduct = 'Todos os nossos produtos';
        this.products$ = this.products.getProducts();
      }
    })
  }

}
