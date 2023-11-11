import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { ThoughtInterface } from './ITthought';

@Injectable({
  //Está dizendo que esse valor pode ser injetável em toda a aplicação, pois o valor está como 'root'
  providedIn: 'root'
})
export class ThoughtServiceService {

  private readonly API = 'http://localhost/pensamentos'

  constructor(private http: HttpClient) {

  }


  listIt() {
    return this.http.get<ThoughtInterface[]>(this.API)

  }
}
