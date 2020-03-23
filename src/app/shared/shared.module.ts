import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCollectionService } from './products-collection.service';
import { HighlightBackgroundDirective } from './highlight-background.directive';


@NgModule({
  declarations: [ HighlightBackgroundDirective ],
  // providers: [ ProductsCollectionService ], // сервис уже зарегистрирован через свой декоратор
  exports: [
    HighlightBackgroundDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
