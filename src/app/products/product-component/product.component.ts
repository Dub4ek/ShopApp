import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product?: ProductModel;
  @Output() buyProductEvent = new EventEmitter<ProductModel>();

  buyButtonClickHandler() {
    this.buyProductEvent.emit(this.product);
  }
}
