import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNameofthedirective]'
})
export class NameofthedirectiveDirective {

  constructor(Element: ElementRef) { 
    Element.nativeElement.innerText = "text to be changed";
  }

}
