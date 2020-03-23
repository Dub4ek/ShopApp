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
  // providers: [ ProductsService ] // сервис уже зарегистрирован через свой дкоратор.
  // Расположение сервиса не очень понятное, почему он в папке с компонентом?
})
export class ProductsModule {
}
