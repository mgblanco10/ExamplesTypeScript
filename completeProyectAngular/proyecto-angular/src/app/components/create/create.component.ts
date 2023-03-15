import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { UploadService } from '../../services/upload.servise';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string = '';
  public filesToUpload: Array<File> = [];

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.title = "Create project";
    this.project = new Project ('','','','',2023,'','');
  }

  ngOnInit() {   
  }

  onSubmit(form:any) {
    // console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (typeof response === 'object'){
          this.status = 'success'; // Si la petición fue exitosa
          form.reset()
        }else{
          this.status = 'failed'; // Si hubo un error en la petición
        }
      },
      error => {
        console.log(error);
       
      }
    );
  }
  fileChangeEvent(fileInput: any){
    console.log(fileInput);
    // this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}

