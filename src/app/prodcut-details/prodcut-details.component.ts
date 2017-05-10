import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prodcut-details',
  templateUrl: './prodcut-details.component.html',
  styleUrls: ['./prodcut-details.component.css']
})
export class ProdcutDetailsComponent {

  @Input() product;

}
