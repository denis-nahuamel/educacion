import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MatriculaInterface } from '../models/matricula';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private MatriculasCollection: AngularFirestoreCollection<MatriculaInterface>;
  private Matriculas: Observable<MatriculaInterface[]>;

 constructor(private afs: AngularFirestore) {
    this.MatriculasCollection = this.afs.collection<MatriculaInterface>('matriculas');
    this.Matriculas = this.MatriculasCollection.valueChanges();


  }
  getMatriculas() {

    return this.Matriculas = this.MatriculasCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as MatriculaInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
   agregarMatricula(matricula: MatriculaInterface): void {
     console.log(matricula,"aquiii");
    const postObj = {
      nombre: matricula.nombre,
      estudiantes:matricula.estudiantes
    };
    this.MatriculasCollection.add(postObj);
  }

}
