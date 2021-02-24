import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { EstudianteInterface } from '../models/estudiante';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
private EstudiantesCollection: AngularFirestoreCollection<EstudianteInterface>;
  private Estudiantes: Observable<EstudianteInterface[]>;

 constructor(private afs: AngularFirestore) {
    this.EstudiantesCollection = this.afs.collection<EstudianteInterface>('estudiantes');
    this.Estudiantes = this.EstudiantesCollection.valueChanges();


  }
  getEstudiantes() {

    return this.Estudiantes = this.EstudiantesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as EstudianteInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
   agregarEstudiante(estudiante: EstudianteInterface): void {
     console.log(estudiante,"aquiii");

    const postObj = {
      apellidoMaterno: estudiante.apellidoMaterno,
      apellidoPaterno: estudiante.apellidoPaterno,
      celular: estudiante.celular,
      dni: estudiante.dni,
      nombres: estudiante.nombres,
      cursos:estudiante.cursos
    };
    this.EstudiantesCollection.add(postObj);
  }
}
