import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //Para poder hacer las peticiones ajax
import { FormsModule } from '@angular/forms'; //Importamos librerias para formularios
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//veo que los siguientes componentes se importan en automàtico con el comando ng g component nombrecomponent
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

import * as $ from 'jquery';
import { SliderComponent } from './components/slider/slider.component';
import { ResaltadoDirective } from './resaltado.directive' //para trabajar a manera global con el jquery 


@NgModule({
  declarations: [ //Las directivas, pipes y componentes van en declarations 
    AppComponent,
    //veo que los siguiente se coloca en automàtico con el comando ng g component nombrecomponent
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    SliderComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule, //para trabajar con peticiones AJAX
    FormsModule //Para trabajar con formularios
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
