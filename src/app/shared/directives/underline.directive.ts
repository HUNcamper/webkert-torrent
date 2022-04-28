import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.textDecoration = 'underline';
  }

}
