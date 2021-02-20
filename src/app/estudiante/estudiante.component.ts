import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { EstudianteService } from '../services/estudiante.service';
import { EstudianteInterface } from '../models/estudiante';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
public estudiantesList:EstudianteInterface[];

  constructor(private firestore: AngularFirestore,private estudianteApi: EstudianteService,
              private router: Router) {
                 this.estudiantesList=[];
  }

  ngOnInit(): void {
    this.Cursos();
  }
  Cursos(){
this.estudiantesList=[];
 	this.estudianteApi.getEstudiantes().subscribe(estudiantes => {
 		for (let estudiante of estudiantes){
        		this.estudiantesList.push(estudiante);
 		}
 	});
 }
}
