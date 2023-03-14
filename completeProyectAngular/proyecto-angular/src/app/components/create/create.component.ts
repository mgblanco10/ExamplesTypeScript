import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService]
})
export class CreateComponent implements OnInit {
  public title : string;
  public project: Project;
  public status: string = '';

  constructor(
    private _projectService: ProjectService
  ){
    this.title= "Create project";
    this.project = new Project ('','','','',2023,'','');

  }

  ngOnInit() {   
  }

  onSubmit(form:any) {
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project){
          
          this.status = 'success';
        }else{
          this.status = 'failed';
        }
       
      },
      error => {
        console.log(error);
      }
    );
  }
}
