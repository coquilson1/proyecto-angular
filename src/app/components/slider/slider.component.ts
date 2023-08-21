import { Component, Input, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  @Input() anchura: number;
  @Input('etiquetas') captions: boolean

  constructor(){
    this.anchura = 0;
    this.captions = false;
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

}
