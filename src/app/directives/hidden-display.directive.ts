import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[appHiddenDisplay]'
})
export class HiddenDisplayDirective {

  @Input('appHiddenDisplay') bgColor: string

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.opacity = 0
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = this.bgColor
  }

  @HostListener('mouseover')
  handleMouseover() {
    this.element.nativeElement.style.opacity = 1
  }

  @HostListener('mouseleave')
  handleMouseleave() {
    this.element.nativeElement.style.opacity = 0
  }

}
