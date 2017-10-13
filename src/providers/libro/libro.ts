import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LibroProvider {

  //url = "http://localhost:3000/api/books"
  url = "http://192.168.43.93:3000/api/books"

  constructor(public http: HttpClient) {}

  all(){
    return this.http.get<Libro[]>(this.url)
  }

  insert(book:Libro){
    return this.http.post<SimpleResponse>(this.url, book)
  }


}

export class Libro {
  _id: string;
  nombre:string;
  autor:string;
  paginas:number;  
}

export class SimpleResponse{
  success:boolean;
  err:string;
}