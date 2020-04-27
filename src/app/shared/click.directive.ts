import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  @Input() text = '';
  @HostListener('click', ['$event.target'])
  mouseClickEventHandler() {
    this.renderer.addClass(this.el.nativeElement, 'fancy-click');
  }

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) {
  }
}
