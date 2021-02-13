import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { AngularFireModule} from '@angular/fire';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocentesComponent } from './docentes/docentes.component';
import { CursoComponent } from './curso/curso.component';
const firebase = {
    apiKey: "AIzaSyDhGhYs_RGhWmFRjZP3jti-ZLmgO6JSxEw",
    authDomain: "pabloapostolcusco.firebaseapp.com",
    databaseURL: "https://pabloapostolcusco.firebaseio.com",
    projectId: "pabloapostolcusco",
    storageBucket: "pabloapostolcusco.appspot.com",
    messagingSenderId: "427970761136",
    appId: "1:427970761136:web:b2bff305d36ba6d3258675",
    measurementId: "G-JJQN56PFN9"
  };
@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    HomeComponent,
    DocentesComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     AngularFireModule.initializeApp(firebase),
     RouterModule.forRoot([
      {path: '', component: EstudianteComponent, pathMatch: 'full' },
     {path: 'docentes', component: DocentesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
