import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VisitRequest, VisitResponse } from '../interfaces/visit';

@Injectable({
  providedIn: 'root'
})
export class AgendacionesService {

  public apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  saveVisit(visit: VisitRequest): Observable<VisitResponse> {
    return this.http.post<VisitResponse>(`${this.apiUrl}visits`, visit);
  }

  getVisit(): Observable<VisitResponse[]> {
    return this.http.get<VisitResponse[]>(`${this.apiUrl}visits`);
  }
}
