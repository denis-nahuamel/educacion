import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { AngularFireModule} from '@angular/fire';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocentesComponent } from './docentes/docentes.component';
import { CursoComponent } from './curso/curso.component';
import { AgregarDocenteComponent } from './docentes/agregar-docente/agregar-docente.component';
import { AgregarEstudianteComponent } from './estudiante/agregar-estudiante/agregar-estudiante.component';
import { AgregarCursoComponent } from './curso/agregar-curso/agregar-curso.component';
const firebase = {
     apiKey: "AIzaSyB3bmXYohaGFRLxc0_uHQHzbe_B13k9FnI",
    authDomain: "educacion-c0287.firebaseapp.com",
    projectId: "educacion-c0287",
    storageBucket: "educacion-c0287.appspot.com",
    messagingSenderId: "1003371016732",
    appId: "1:1003371016732:web:146c38caad1eadc8dc65d9",
    measurementId: "G-NNNCSYDDZQ"
  };
@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    HomeComponent,
    DocentesComponent,
    CursoComponent,
    AgregarDocenteComponent,
    AgregarEstudianteComponent,
    AgregarCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
     AngularFireModule.initializeApp(firebase),
     RouterModule.forRoot([
      {path: '', component: EstudianteComponent, pathMatch: 'full' },
     {path: 'docentes', component: DocentesComponent },
     {path: 'docentes/agregar', component: AgregarDocenteComponent },
     {path: 'estudiantes', component: EstudianteComponent },
     {path: 'estudiantes/agregar', component: AgregarEstudianteComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
