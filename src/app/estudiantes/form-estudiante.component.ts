import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit {

  //creamos la instancia de estudiante
  estudiante: Estudiante = new Estudiante();

  //creamos un titulo
  titulo:string = 'Registros de Estudiante';

  //declaramos las dos variables privadas
  constructor(private estudianteService: EstudianteService, private router: Router) { }

  ngOnInit(): void {
  }

  //creamos el metodo donde vamos hacer las llamadas 
  create(): void{
    console.log(this.estudiante);
    this.estudianteService.create(this.estudiante).subscribe(
      res => this.router.navigate(['/estudiantes']) //retorna a estudiante
    );

  }

}
