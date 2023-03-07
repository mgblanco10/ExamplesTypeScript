import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
    public url: string;

    constructor(
        private_http: HttpClient
    ){
        this.url = Global.url;
    }
    testService(){
        return 'Probando angula servicio';
    }
}