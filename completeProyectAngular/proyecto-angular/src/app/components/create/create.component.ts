import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService]
})
export class CreateComponent implements OnInit {
  public title : string;
  public project: Project;

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
  }
}
