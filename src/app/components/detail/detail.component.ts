import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router'; //para poder coger los valores q vienen por la URL 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.project = new Project('','','','',2023,'','');
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.queryParamMap.subscribe( (params) => {
      //https://www.angularjswiki.com/angular/query-parameters-in-angular/
      //https://www.angularjswiki.com/angular/get-query-parameters-in-angular/
     // let paramsObject = {params.id};

     // this.getProject(id);
    });
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

}
