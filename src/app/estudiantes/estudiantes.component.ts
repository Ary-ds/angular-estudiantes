import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  titulo:string = 'lista de estudiantes';

  prueba:string = 'mi primera prueba en angular';

  //declaramos una variable para poder obtener una lista de estudiante
  estudiantes:Estudiante[];
               //para simular la inyecion de dependencia
  constructor( private estudianteService: EstudianteService) { }

  ngOnInit(): void {
  
    //aqui hacemos la llamada a los metodos de service

    //para obtener todos los estudiantes siempre hay que subscribir para conectar y retornar 
    this.estudianteService.getAll().subscribe(
      //creamos la funcion lamda
      e => this.estudiantes = e
    );

  }

}
