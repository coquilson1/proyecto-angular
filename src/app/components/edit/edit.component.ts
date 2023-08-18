import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit{

  public title: string;
  public project: Project;

  constructor(
    private _ProjectService: ProjectService,
    private _uploadService: UploadService,
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.title = "Editar Proyecto"
    this.project = new Project('','','','',2019,'','');
 }

  ngOnInit(): void {
    let idProject:string = "" + this._route.snapshot.paramMap.get('id');
    this.getProject(idProject);
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
