import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buyButtonClickHandler() {
    console.log('You\'ve bought a product');
  }
}
