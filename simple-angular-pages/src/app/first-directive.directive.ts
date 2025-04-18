import { Directive, ElementRef , Input} from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {

  constructor(private element: ElementRef) { 
   
  }
  // @Input directive e veri gondermek icin kullanilir
  @Input() set bgColor(color:string){
    this.element.nativeElement.style.backgroundColor = color
  }


}
