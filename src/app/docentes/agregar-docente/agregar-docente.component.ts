import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm ,ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { DocenteService } from 'src/app/services/docente.service';
import { DocenteInterface } from 'src/app/models/docente';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})
export class AgregarDocenteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
  	private firestore: AngularFirestore,public docenteService: DocenteService,
     private storage: AngularFireStorage,private router: Router,
    ) {
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
  message: string = "Docente Agregado."
  @Output() messageEvent = new EventEmitter<string>();

ngOnInit() {

      //this.titulo="Agregar Docente";
      this.btnTexto="Agregar";

}
  agregarDocente(data: DocenteInterface) {
        this.docenteService.agregarDocente(data);
        //this.irAtras();
  }
  irAtras(){
        this.router.navigate(['docentes']);
  }

}
