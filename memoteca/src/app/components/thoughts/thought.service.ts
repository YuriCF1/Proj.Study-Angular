import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { ThoughtInterface } from './ITthought';
import { Observable } from 'rxjs';

@Injectable({
  //Está dizendo que esse valor pode ser injetável em toda a aplicação, pois o valor está como 'root'
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) {

  }


  //Getting thoughts
  listIt(): Observable<ThoughtInterface[]> {
    return this.http.get<ThoughtInterface[]>(this.API)
  }

  createThought(thoughtSent: ThoughtInterface): Observable<ThoughtInterface> {
    return this.http.post<ThoughtInterface>(this.API, thoughtSent)
  }

  deleteThought(id: number): Observable<ThoughtInterface> {
    const url = `${this.API}/${id}`
    return this.http.delete<ThoughtInterface>(url)
  }

  getById(id: number): Observable<ThoughtInterface> {
    const url = `${this.API}/${id}`
    return this.http.get<ThoughtInterface>(url)
  }
}
