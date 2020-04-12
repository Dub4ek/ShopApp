import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightBackgroundDirective } from './highlight-background.directive';
import { ClickDirective } from './click.directive';


@NgModule({
  declarations: [ HighlightBackgroundDirective, ClickDirective ],
  exports: [
    HighlightBackgroundDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
