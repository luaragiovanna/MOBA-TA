import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum SearchType{
  all ='',
  movie = 'movie',
  series= 'series',
  episode = 'episode',
  game = 'game'
}


@Injectable({
  providedIn: 'root'
})
export class OmdbapiService {
  url = 'http://www.omdbapi.com/';
  apiKey = '4accee6b'; //maneira correta colocar em outro arqv e importar


  constructor( private http: HttpClient

  ) { }

  getAll(title: string, type: SearchType):Observable<any>{
    //caminho do request
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`);
  }

  getById(id:any){
    //regra de negocio
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
