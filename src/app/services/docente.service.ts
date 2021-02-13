import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { DocenteInterface } from '../models/docente';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private DocentesCollection: AngularFirestoreCollection<DocenteInterface>;
  private Docentes: Observable<DocenteInterface[]>;
 /* private DocenteDoc: AngularFirestoreDocument<DocenteInterface>;
  private Docente: Observable<DocenteInterface>;
  public selectedDocente: DocenteInterface = {
    id: null
  };*/
 constructor(private afs: AngularFirestore) {
    this.DocentesCollection = afs.collection<DocenteInterface>('docentes');
    this.Docentes = this.DocentesCollection.valueChanges();

  }
  getDocentes() {

    return this.Docentes = this.DocentesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as DocenteInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
}
