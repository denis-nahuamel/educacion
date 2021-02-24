import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CursoService } from '../services/curso.service';
import { CursoInterface } from '../models/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
public cursosList:CursoInterface[];

  constructor(private firestore: AngularFirestore,private cursoApi: CursoService,
              private router: Router) {
                 this.cursosList=[];
  }

  ngOnInit(): void {
    this.Cursos();
  }
  Cursos(){
  this.cursosList=[];
  this.cursoApi.getCursos().subscribe(cursos => {
    for (let curso of cursos){
            this.cursosList.push(curso);
    }
  });
 }

}

