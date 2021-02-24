import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm ,ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { CursoInterface } from 'src/app/models/curso';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore,public cursoService: CursoService,
     private storage: AngularFireStorage,private router: Router,
    ) {
  }

 public nombre?: string;

 public btnTexto?:string;
 public newPostForm = new FormGroup({

    nombre: new FormControl('', Validators.required)

  });
  message: string = "Curso Agregado."
  @Output() messageEvent = new EventEmitter<string>();

ngOnInit() {

      //this.titulo="Agregar Curso";
      this.btnTexto="Agregar";

}
  agregarCurso(data: CursoInterface) {
        this.cursoService.agregarCurso(data);
        this.irAtras();
  }
  irAtras(){
        this.router.navigate(['cursos']);
  }

}

