import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  public apiUrl: string = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  obtenerPosts(): Observable<Post[]>{
    return this._http.get<Post[]>(`${this.apiUrl}posts`);
  }
}
