import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product-component/product.component';
import { ProductListComponent } from './product-list-component/product-list.component';
import { ProductsService } from './product-component/products.service';


@NgModule({
  declarations: [ ProductComponent, ProductListComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [ ProductsService ]
})
export class ProductsModule {
}
