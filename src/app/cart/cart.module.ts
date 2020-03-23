import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ CartItemComponent, CartListComponent ],
    imports: [
        CommonModule,
        SharedModule
    ],
  exports: [
    CartListComponent
  ],
})
export class CartModule {
}
