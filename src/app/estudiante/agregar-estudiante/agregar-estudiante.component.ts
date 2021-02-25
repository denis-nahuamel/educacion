import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm ,ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { EstudianteInterface } from 'src/app/models/estudiante';
import { CursoService } from 'src/app/services/curso.service';
import { CursoInterface } from 'src/app/models/curso';
@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {
public cursosList:CursoInterface[];
verSeleccion: string        = '';
opcionSeleccionado: string  = '0';
  constructor(private activatedRoute: ActivatedRoute,
  	private firestore: AngularFirestore,public cursoService: CursoService,public estudianteService: EstudianteService,
     private storage: AngularFireStorage,private router: Router,
    ) {
      this.cursosList=[];
  }

 public nombres?: string;
 public apellidoPaterno?: string;
 public apellidoMaterno?: string;
 public celular?:string;
 public dni?:string;

 public btnTexto?:string;
 public newPostForm = new FormGroup({

    nombres: new FormControl('', Validators.required),
    apellidoPaterno: new FormControl('', Validators.required),
    apellidoMaterno: new FormControl(''),
     celular: new FormControl(''),
     dni: new FormControl('')

  });
  message: string = "Estudiante Agregado."
  @Output() messageEvent = new EventEmitter<string>();

ngOnInit() {

      //this.titulo="Agregar Estudiante";
      this.Cursos();
      this.btnTexto="Agregar";

}
  agregarEstudiante(data: EstudianteInterface) {
        this.estudianteService.agregarEstudiante(data);
        this.irAtras();
  }
  Cursos(){
  this.cursosList=[];
  this.cursoService.getCursos().subscribe(cursos => {
    for (let curso of cursos){
            this.cursosList.push(curso);
    }
  });
 }
 capturar() {
      // Pasamos el valor seleccionado a la variable verSeleccion
      this.verSeleccion = this.opcionSeleccionado;
  }
  irAtras(){
        this.router.navigate(['estudiantes']);
  }

}

