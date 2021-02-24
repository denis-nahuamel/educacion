import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CursoInterface } from '../models/curso';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private CursosCollection: AngularFirestoreCollection<CursoInterface>;
  private Cursos: Observable<CursoInterface[]>;

 constructor(private afs: AngularFirestore) {
    this.CursosCollection = this.afs.collection<CursoInterface>('cursos');
    this.Cursos = this.CursosCollection.valueChanges();


  }
  getCursos() {

    return this.Cursos = this.CursosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as CursoInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
   agregarCurso(curso: CursoInterface): void {
     console.log(curso,"aquiii");
    const postObj = {
      nombre: curso.nombre
    };
    this.CursosCollection.add(postObj);
  }

}
