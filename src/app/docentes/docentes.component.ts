import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DocenteService } from '../services/docente.service';
import { DocenteInterface } from '../models/docente';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {
public docentesList:DocenteInterface[];

  constructor(private firestore: AngularFirestore,private docenteApi: DocenteService,
              private router: Router) {
                 this.docentesList=[];
  }

  ngOnInit(): void {
    this.Cursos();
  }
  Cursos(){

 	this.docenteApi.getDocentes().subscribe(docentes => {
 		for (let docente of docentes){
        		this.docentesList.push(docente);
 		}
 	});
 }

}
