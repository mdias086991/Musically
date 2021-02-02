import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title1 = "Frete grátis";
  icon1 = "fas fa-truck";

  title2="Presentei alguém!";
  icon2="fas fa-gift";
  
  title3="Suporte durante a compra";
  icon3="fas fa-headset";
  
  title4="Entrega rápida";
  icon4="fas fa-clock";
  
  products = [
    {'id': 1, 'name': 'Violão preto', 'category': 'Violões', 'price': '359,00', 'description': 'violão bem bonito e bem prático para todas as idades', 'image': 'violao.png'},
    {'id': 2, 'name': 'Violão preto', 'category': 'Violões', 'price': '359,00', 'description': 'violão bem bonito e bem prático para todas as idades', 'image': 'violao.png'},
    {'id': 3, 'name': 'Violão preto', 'category': 'Violões', 'price': '359,00', 'description': 'violão bem bonito e bem prático para todas as idades', 'image': 'violao.png'},
    {'id': 3, 'name': 'Violão preto', 'category': 'Violões', 'price': '359,00', 'description': 'violão bem bonito e bem prático para todas as idades', 'image': 'violao.png'},
    {'id': 3, 'name': 'Violão preto', 'category': 'Violões', 'price': '359,00', 'description': 'violão bem bonito e bem prático para todas as idades', 'image': 'violao.png'},
    {'id': 3, 'name': 'Violão preto', 'category': 'Violões', 'price': '359,00', 'description': 'violão bem bonito e bem prático para todas as idades', 'image': 'violao.png'},
    {'id': 3, 'name': 'Violão preto', 'category': 'Violões', 'price': '359,00', 'description': 'violão bem bonito e bem prático para todas as idades', 'image': 'violao.png'},
    {'id': 3, 'name': 'Violão preto', 'category': 'Violões', 'price': '359,00', 'description': 'violão bem bonito e bem prático para todas as idades', 'image': 'violao.png'},
    {'id': 3, 'name': 'Violão preto', 'category': 'Violões', 'price': '359,00', 'description': 'violão bem bonito e bem prático para todas as idades', 'image': 'violao.png'},
    {'id': 3, 'name': 'Violão preto', 'category': 'Violões', 'price': '359,00', 'description': 'violão bem bonito e bem prático para todas as idades', 'image': 'violao.png'},
  ]
  ngOnInit(): void {
    
  }

}
