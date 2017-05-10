import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Parent App';
  products;
  selectedProduct;

  constructor(private http: Http){
    this.http.get('assets/products.json').subscribe(res => this.products = res.json())
  }

  onSelect(product){
    this.selectedProduct = product;
  }

}
