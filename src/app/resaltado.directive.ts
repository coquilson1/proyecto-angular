import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnInit{

  constructor(public el: ElementRef){
    // var element  = el.nativeElement;
    // element.style.background = "blue";
    // element.style.padding = "20px";
    // element.style.marginTop = "15px";
    // element.style.color = "white";
  }

  ngOnInit(): void {
    var element  = this.el.nativeElement;
     element.style.background = "blue";
     element.style.padding = "20px";
     element.style.marginTop = "15px";
     element.style.color = "white";
     element.style.width = "60%";

     element.innerText = element.innerText.toUpperCase().replace("CONTACTO","|||");
  }


}
