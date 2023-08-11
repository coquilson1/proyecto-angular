import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService] //Cargo el objeto ProjectService dentro de la propiedad providers de mi decorador
})
export class CreateComponent implements OnInit{
  public title: string;
  public project: Project;
  public status: string;

  constructor(
    private _ProjectService: ProjectService
  ){
    this.title = "Crear Proyecto"
    this.project = new Project('','','','',2023,'','');
    this.status = "";
  }

  ngOnInit(): void {
    
  }

  onSubmit(form: any){
    console.log(this.project);
    this._ProjectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          this.status = "success";
          form.reset();
        } else {
          this.status = "failed";
        }

      },
      error => {
        console.log(<any>error)
      }
    );
  }

}
