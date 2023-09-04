import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'; //El Input? y el Output son decoradores
                                                                                //El EventEmitter es para crear nuevos eventos por 
                                                                                //nosotros mismos 
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  @Input() anchura: number;
  @Input('etiquetas') captions: boolean
  @Output() conseguirAutor = new EventEmitter();


  public autor: any;

  constructor(){
    this.anchura = 0;
    this.captions = false;
    
    this.autor = {
      nombre: "Jorge Infante",
      website: "jorgeinfanteweb.pe",
      youtube: "Jorge Infante Web"
    };

  }

  ngOnInit(): void {

    //$("logo").click(function(e){
      //e.preventDefault();

     // $("header").css("background","green")
       //          .css("height","50px")
  //})
  
    $(".bxSlider").bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }

  lanzar(event:any){
    console.log(event);
    this.conseguirAutor.emit(this.autor);
  }

}
