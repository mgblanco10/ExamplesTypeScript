import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.servise';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Global } from '../../services/global';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project = { name: '', description: '', category: '', langs: '', year: 0, image: '', _id:''};
  public saveProject: any = null;
  public status: string = '';
  public filesToUpload: Array<File> = [];
  public url: string;
  
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = "Edit project";
    this.url = Global.url;
  }


  ngOnInit() {
    this._route.params.subscribe((params: Params)  =>{
      let id = params['id'];

      this.getProject(id);
    });
}

getProject(id: any){
  this._projectService.getProject(id).subscribe(
    (response: any) =>{
      this.project = response;
    }, (error: any) =>{
      console.log(<any>error)
    }
  );
}

onSubmit(){
  this._projectService.updateProject(this.project).subscribe(
    (response: any) =>{
      if (typeof response === 'object'){

        this.saveProject = response;
        this.status = 'success'; 
      }else{
        this.status = 'failed';
      }
    }, (error: any) =>{
      console.log(<any>error)
    }
  );
}

fileChangeEvent(fileInput: any){
  console.log(fileInput);
  // this.filesToUpload = <Array<File>>fileInput.target.files;
}

}
