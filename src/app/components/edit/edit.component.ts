import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit{

  public title: string;
  public project: Project;
  public url: String;

  //Variables que necesité crear para reutilizar la vista de create.component.hml
  public status: string;
  public save_project: Project;
  public filesToUpload: Array<File>;

  constructor(
    private _ProjectService: ProjectService,
    private _uploadService: UploadService,
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.title = "Editar Proyecto"
    this.project = new Project('','','','',2019,'','');
    this.url = Global.url;
    
    //Inicializaciones que necesité crear para reutilizar la vista de create.component.hml
    this.status = "";
    this.save_project = new Project('','','','',2019,'','');
    this.filesToUpload = new Array<File>;

 }

  ngOnInit(): void {
    let id: string = "" + this._route.snapshot.paramMap.get('id');
    this.getProject(id);
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

  //Métodos que necesité crear para reutilizar la vista de create.component.hml
  onSubmit(form: any): void{
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){
          
          //subir la imagen
          if(this.filesToUpload){
            
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
              .then((result:any) => {
                this.save_project = result.project;
                this.status = "success";
                console.log(result);
              });

            } else {
              this.status = "failed";
            }
         }
      },
      error => {
        console.log('entra al erro');
        console.log(<any>error);
      }
    )
  }

  fileChangeEvent(fileInput: any): void{
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
