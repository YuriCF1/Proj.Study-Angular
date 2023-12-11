import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http"
import { ThoughtInterface } from './ITthought';
import { Observable } from 'rxjs';

@Injectable({
  //Está dizendo que esse valor pode ser injetável em toda a aplicação, pois o valor está como 'root'
  providedIn: 'root'
})
export class ThoughtService {

  //URL para teste local
  // private readonly API = 'http://localhost:3000/pensamentos'

  //Deploy
  private readonly API = 'https://savethought-backend.onrender.com/pensamentos'

  constructor(private http: HttpClient) {

  }

  //Getting thoughts
  listIt(page: number, filterSearch: string, favoriteSearched: boolean): Observable<ThoughtInterface[]> {
    //--Sem repaginacao
    // return this.http.get<ThoughtInterface[]>(this.API)
    //GET /posts?_page=7&_limit=20 -- //Exemplo da api do json server

    //--Com repaginacao
    /*GET /sua-rota?_page=2&_limit=6
    Isso solicitará à API JSON Servera segunda página dos resultados paginados,
    que começará do sétimo pensamento em diante, novamente limitado a 6 itens por página. */

    // const itensPerPage = 6;
    // return this.http.get<ThoughtInterface[]>(`${this.API}?_page=${page}&_limit=${itensPerPage}`)

    //--Com repaginacao usando o HttpParams
    const itensPerPage = 6;
    let params = new HttpParams()
      .set("_page", page)
      .set("_limit", itensPerPage);

    if (filterSearch.trim().length > 2) {//trim = remove espacos vazios.
      //2 = dificilmente alguem vai buscar algo contendo 2 caracteres. Fazendo isso, diminui a quantidade de requisicoes
      params = params.set("q", filterSearch)
    }

    if (favoriteSearched) {
      params = params.set("favorite", true)
    }
    return this.http.get<ThoughtInterface[]>(this.API, { params: params }) //Obs: NO JS, chave do mesmo nome do valor, pode omitir = {params}

    /*{

      PARA BUSCAS MAIS COMPLEXAS NA API JSON SERVER

    "posts": [
      { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": [
      { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }

    GET /posts?title=json-server&author=typicode

    Para filtrar posts pelo título e autor
    GET /comments?author.name=typicode

Para filtrar comentários pela propriedade ‘name’ do autor, usando o . (ponto) para acessar objetos aninhados.
  }*/

  }

  createThought(thoughtSent: ThoughtInterface): Observable<ThoughtInterface> {
    return this.http.post<ThoughtInterface>(this.API, thoughtSent)
  }

  editThought(thoughtClicked: ThoughtInterface): Observable<ThoughtInterface> {
    const url = `${this.API}/${thoughtClicked.id}`
    return this.http.put<ThoughtInterface>(url, thoughtClicked)
  }

  deleteThought(id: number): Observable<ThoughtInterface> {
    const url = `${this.API}/${id}`
    return this.http.delete<ThoughtInterface>(url)
  }

  getById(id: number): Observable<ThoughtInterface> {
    const url = `${this.API}/${id}`
    return this.http.get<ThoughtInterface>(url)
  }

  changeFavoriteStatus(clickedThought: ThoughtInterface): Observable<ThoughtInterface> {
    clickedThought.favorite = !clickedThought.favorite;
    // const url = `${this.API}/${clickedThought.id}`
    // return this.http.put<ThoughtInterface>(url, clickedThought)
    return this.editThought(clickedThought)
  }
}
/*
//Método antigo para listar favoritos. Aprimorados no 'listIt'

listFavorites(page: number, filterOfFavorite: string): Observable<ThoughtInterface[]> {
  const itensPerPage = 6;
  let params = new HttpParams()
  .set("_page", page)
  .set("_limit", itensPerPage)
  .set("favorite", true);

  if (filterOfFavorite.trim().length > 2) {//trim = remove espacos vazios.
    //2 = dificilmente alguem vai buscar algo contendo 2 caracteres. Fazendo isso, diminui a quantidade de requisicoes
    params = params.set("q", filterOfFavorite)

  }
  return this.http.get<ThoughtInterface[]>(this.API, { params: params }) //Obs: NO JS,
}
}
*/

/*EXEMPLO DE MÉTODOS DO HTTPPARAMS

import { HttpParams } from '@angular/common/http';

// Exemplo de corpo de requisição (parâmetros)
const params = new HttpParams()
  .append('category', 'angular')
  .append('category', 'typescript')
  .append('author', 'John Doe')
  .append('published', 'true');

// Exemplo de uso dos métodos
console.log(params.has('category'));      // true
console.log(params.has('tag'));           // false

console.log(params.get('category'));       // 'angular'
console.log(params.get('tag'));            // null

console.log(params.getAll('category'));    // ['angular', 'typescript']
console.log(params.getAll('tag'));         // []

console.log(params.keys());                // ['category', 'author', 'published']

const newParams = params.append('tag', 'http');  // Adiciona um novo valor ao parâmetro 'tag'
console.log(newParams.getAll('tag'));            // ['http']

const appendedParams = params.appendAll({ 'tag': ['http', 'javascript'] });
console.log(appendedParams.getAll('tag'));       // ['http', 'javascript']

const deletedParams = params.delete('category'); // Remove um valor específico do parâmetro 'category'
console.log(deletedParams.getAll('category'));   // ['typescript']

const deletedAllParams = params.delete('category', 'author'); // Remove todos os valores dos parâmetros 'category' e 'author'
console.log(deletedAllParams.getAll('category'));             // []
console.log(deletedAllParams.getAll('author'));               // []

const serializedString = params.toString();
console.log(serializedString);
// Saída esperada: 'category=angular&category=typescript&author=John%20Doe&published=true'




*/
