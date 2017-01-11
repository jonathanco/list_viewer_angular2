import {Directive, ElementRef, HostListener, Renderer} from "@angular/core";

@Directive({
  selector: '[sunshine]'
})
export class SunshineDirective {
  private element: ElementRef;
  private renderer: Renderer;

  constructor(element: ElementRef, renderer: Renderer) {
    this.element  = element;
    this.renderer = renderer;
  }

  @HostListener('mouseover')
  public makeSunshine() {
    this.renderer.setElementStyle(this.element.nativeElement, 'background-color', 'yellow')
  }

  @HostListener('mouseleave')
  public sunshineOff() {
    this.renderer.setElementStyle(this.element.nativeElement, 'background-color', '')
  }

}
