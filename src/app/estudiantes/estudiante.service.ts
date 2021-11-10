import { Injectable } from '@angular/core';

//importamos el http cliente
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from './estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  //la pasamos la ruta del url para conectar con la api rest 
  private url:string= "http://localhost:8080/estudiantes";
  
  //para hacer las llamadas a la api-rest
  constructor(private http: HttpClient) { }

  //metodo para crear estudiante
  create(estudiante: Estudiante) : Observable<Estudiante>{
    return this.http.post<Estudiante>(this.url, estudiante);
  }

  //creamos el metodo para conectar obtner todos los estudiantes
   getAll() : Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.url);
  }

   //creamos el metodo para conectar obtner un estudiante
   get(id:number) : Observable<Estudiante> {
    return this.http.get<Estudiante>(this.url + '/' + id);
  }


  //creamos el metodo para actualizar 
  update(estudiante: Estudiante): Observable<Estudiante>{
    return this.http.put<Estudiante>(this.url, estudiante);
  }



   //creamos el metodo para eliminar  un estudiante
   delete(id:number) : Observable<Estudiante> {
    return this.http.delete<Estudiante>(this.url + '/' + id);
  }

  
}
