import {Directive, TemplateRef, ViewContainerRef, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[onlyIf]'
})

export class OnlyIfDirective {
  private template: TemplateRef<any>;
  private container: ViewContainerRef;

  constructor(template: TemplateRef<any>, container: ViewContainerRef) {
    this.template = template;
    this.container = container;
  }

  @Input()
  set onlyIf(value: boolean) {
    if(value === true){
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }

}
