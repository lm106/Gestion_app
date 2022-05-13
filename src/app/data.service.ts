import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }

  addTask(task: any): Promise <any> {
    return this.firestore.collection('task').add(task);
    // return addDoc(taskRef, task);
  }
  getTasks(): Observable<any>{
    return this.firestore.collection('task').snapshotChanges();
  }
  getTask(id: string): Observable<any> {
    return this.firestore.collection('task').doc(id).snapshotChanges();

  }
  update(task:any, id:string): Promise <any>{
    return this.firestore.collection('task').doc(id).update(task);
  }
}
