import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router'; //para poder coger los valores q vienen por la URL 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: Project;
  public idProject: string;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.project = new Project('','','','',2023,'','');
    this.url = Global.url;
    this.idProject = "";
    this.confirm = false;
  }

  ngOnInit(): void {
    this.idProject = "" + this._route.snapshot.paramMap.get('id');
    this.getProject(this.idProject);
  }

  getProject(id: string){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  setConfirm(confirm: any){
    this.confirm = confirm;
  }

  deleteProject(id: string){
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response.message == "El proyecto se elimino correctamente"){
          this._router.navigate(['/proyectos']);
        }
      }, error => {
        console.log(error);
      }
    )
  }

}
