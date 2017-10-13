import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaqueteProvider {

  //url = "http://localhost:3000/api/books"
  url = "http://192.168.43.93:3000/api/paquetes"

  constructor(public http: HttpClient) {}

  all(){
    return this.http.get<Paquete[]>(this.url)
  }

  insert(paquete:Paquete){
    return this.http.post<SimpleResponse>(this.url, paquete)
  }


}

export class Paquete {
  _id: string;
  nombre:string;
  precio:number;
  descripcion:string;
  imagen:string;
}

export class SimpleResponse{
  success:boolean;
  err:string;
}