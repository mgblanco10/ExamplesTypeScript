import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ ProjectService]
})
export class ProjectsComponent {
  public projects: Project[] = [];
  public url: string;

  constructor(
    private _projectService: ProjectService
  ){
    this.url = Global.url;
  }

  ngOnInit(){
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      (response: any) =>{
        console.log(response);
        if(response){
          this.projects = response; // asignar la respuesta al array projects
        }
      }, (error: any) =>{
        console.log(<any>error)
      }
    );
  }
}





