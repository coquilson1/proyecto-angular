import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  public widthSlider: number;
  public anchuraToSlider: number;
  public captions: boolean

  constructor(){
    this.widthSlider = 0;
    this.anchuraToSlider = 0;
    this.captions = true;
  }

  ngOnInit(): void {
    
  }

  cargarSlider(): void{
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(): void{
    this.anchuraToSlider = 0;
  }
}
