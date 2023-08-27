import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'; //ViewChild para coger elementos de la vista
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit{
  public widthSlider: number;
  public anchuraToSlider: number;
  public captions: boolean
  public autor: any;

  @ViewChild('textos') textos: any;

  constructor(){
    this.widthSlider = 0;
    this.anchuraToSlider = 0;
    this.captions = true;
  }

  ngOnInit(): void {
    var opcion_clasica =  document.querySelector('#texto');
    console.log('hola');
  }

  ngAfterViewInit(): void {
    console.log(this.textos.nativeElement.textContent);
    
  }


  cargarSlider(): void{
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(): void{
    this.anchuraToSlider = 0;
  }

  getAutor(event: any): void{
    console.log(event);
    this.autor = event;
    console.log('autor:  ');
    console.log(this.autor);
  }

}
