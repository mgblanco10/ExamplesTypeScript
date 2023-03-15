import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  testService() {
    return 'Probando angula servicio';
  }

  saveProject(project: Project): Observable<any> {
    const params = JSON.stringify(project);
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.post(this.url + 'project', params, { headers: headers });
  }

  // uploadImage(projectId: string, image: File): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('image', image, image.name);

  //   return this._http.put(`${this.url}project/${projectId}/image`, formData);
  // }

  getProjects(): Observable<any>{
     const headers = new HttpHeaders().set('Content-type', 'application/json');

     return this._http.get(this.url+'project', {headers:headers})
  }


}
