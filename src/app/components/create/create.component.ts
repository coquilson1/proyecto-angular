import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService] //Cargo el objeto ProjectService dentro de la propiedad providers de mi decorador
})
export class CreateComponent implements OnInit{
  public title: string;
  public project: Project;
  public save_project: Project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _ProjectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.title = "Crear Proyecto"
    this.project = new Project('','','','',2023,'','');
    this.status = "";
    this.filesToUpload = new Array<File>;
    this.save_project = new Project('','','','',2023,'','');
  }

  ngOnInit(): void {
    
  }

  onSubmit(form: any){
    console.log(this.project);

    this._ProjectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          
          //subir la imagen
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
          .then((result:any) => {
            
            this.save_project = result.project;
            
            this.status = "success";
            form.reset();
            console.log(result);
          });

        } else {
          this.status = "failed";
        }

      },
      error => {
        console.log(<any>error)
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
