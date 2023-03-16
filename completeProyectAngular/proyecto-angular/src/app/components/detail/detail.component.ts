import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]
})
export class DetailComponent implements OnInit {
  public url:string;
  public project: Project= { _id: '', name: '', description: '', category: '', year: 2023, langs: '', image: '' };
  public confirm: boolean;


  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route : ActivatedRoute
  ){
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit() {
      this._route.params.subscribe((params: Params)  =>{
        let id = params['id'];

        this.getProject(id);
      });
  }
  // getProject(id: any){
  //   this._projectService.getProject(id).subscribe(
  //     response =>{
  //       this.project = response[0];
  //     },
  //     error =>{
  //       console.log(<any>error)
  //     }
  //   )
  // }
  getProject(id: any){
    this._projectService.getProject(id).subscribe(
      (response: any) =>{
        this.project = response;
        // console.log(response);
        // if(response){
        //   this.project = response; // asignar la respuesta al array projects
        // }
      }, (error: any) =>{
        console.log(<any>error)
      }
    );
  }
  setConfirm(confirm: boolean){
    this.confirm = confirm;
  }
  deleteProject(id: any){
    this._projectService.deleteProject(id).subscribe(
      response =>{
        if(response){
          this._router.navigate(['/projects']); // asignar la respuesta al array projects
        }
      }, (error: any) =>{
        console.log(<any>error)
      }
    );
  }

}
