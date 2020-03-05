import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from './ProductModel';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss' ]
})
export class ProductComponent {
  @Input() product?: ProductModel;
  @Output() buyProductEvent = new EventEmitter<ProductModel>();

  buyButtonClickHandler() {
    this.buyProductEvent.emit(this.product);
  }
}
