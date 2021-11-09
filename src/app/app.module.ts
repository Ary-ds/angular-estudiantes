import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';


//importamos el http cliente module
import {HttpClientModule} from '@angular/common/http';
import { FormEstudianteComponent } from './estudiantes/form-estudiante.component';


//importamos el routes, y routesModelo
import { Routes, RouterModule } from '@angular/router';


//importamos formModule para poder trabajar con formulario
import { FormsModule } from '@angular/forms';



//creamos la configuracion de routas
const routes: Routes = [
  { path:'', redirectTo:'/estudiantes', pathMatch: 'full'},
  { path:'estudiantes', component: EstudiantesComponent},
  { path:'estudiantes/from', component: FormEstudianteComponent},
  { path:'estudiantes/from/:id', component: FormEstudianteComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    FormEstudianteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
