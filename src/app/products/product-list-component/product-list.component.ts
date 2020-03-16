import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product-component/products.service';
import { ProductModel } from '../product-component/ProductModel';
import { CartService } from '../../cart/cart.service';


@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.scss' ]
})
export class ProductListComponent implements OnInit {
  // productService: ProductsService; // этого не нужно делать, надо добавить модификатор доступа для параметров
  // конструктора и все произойдет
  // cartService: CartService;
  products?: Array<ProductModel>;

  constructor(private productService: ProductsService, private cartService: CartService) {
    // this.productService = productService;
    // this.cartService = cartService;
  }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  private getProducts() {
    return this.productService.getProducts();
  }

  onBuyProductEventHandler(value: ProductModel) {
    this.cartService.setProduct(value);
  }
}
