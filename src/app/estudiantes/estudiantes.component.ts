import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  titulo:string = 'lista de estudiantes';

  prueba:string = 'mi primera prueba en angular';

  constructor() { }

  ngOnInit(): void {
  }

}
