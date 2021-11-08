import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
