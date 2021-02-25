import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm ,ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MatriculaService } from 'src/app/services/matricula.service';

import { MatriculaInterface } from 'src/app/models/matricula';
import { CursoService } from 'src/app/services/curso.service';
import { CursoInterface } from 'src/app/models/curso';
@Component({
  selector: 'app-generar-matricula',
  templateUrl: './generar-matricula.component.html',
  styleUrls: ['./generar-matricula.component.css']
})
export class GenerarMatriculaComponent implements OnInit {
public cursosList:CursoInterface[];
  constructor(private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore,public matriculaService: MatriculaService,public cursoService: CursoService,
     private storage: AngularFireStorage,private router: Router,
    ) {
       this.cursosList=[];
  }

 public nombre?: string;

 public btnTexto?:string;
 public newPostForm = new FormGroup({

    nombre: new FormControl('', Validators.required)

  });
  message: string = "Matricula Agregado."
  @Output() messageEvent = new EventEmitter<string>();

ngOnInit() {
    this.Cursos();
      //this.titulo="Agregar Matricula";
      this.btnTexto="Agregar";

}
  agregarMatricula(data: MatriculaInterface) {
        this.matriculaService.agregarMatricula(data);
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
  irAtras(){
        this.router.navigate(['matriculas']);
  }

}

