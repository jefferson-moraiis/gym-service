import * as admin from 'firebase-admin';
import path from 'path';


admin.initializeApp({
  credential: admin.credential.cert(path.resolve(
    __dirname,'../../credentials.json'
  )),
  databaseURL: 'https://gym-app-59167.firebaseio.com' 
})


export default class FirestoreModel<T> {

  private collection: admin.firestore.CollectionReference;

  constructor(collectionName: string) {
    this.collection = admin.firestore().collection(collectionName);
  }

  async create(data: admin.firestore.WithFieldValue<admin.firestore.DocumentData>) {
    const docRef = this.collection.doc();
    const docId = docRef.id;
    data.id = docId;
    await docRef.set(data);
    const createdDoc = await docRef.get();
    if (createdDoc.exists) {
      return createdDoc.data() as T;
    } else {
      throw new Error('Failed to fetch created document');
    }
  }

  async findAll(): Promise<T[]> {
    const querySnapshot = await this.collection.get();
    const documents: T[] = [];
    querySnapshot.forEach((doc) => {
      documents.push(doc.data() as T);
    });
    return documents;
  }

  async findById(docId: string): Promise<T | null> {
    const doc = await this.collection.doc(docId).get();
    if (!doc.exists) return null;
    return doc.data() as T;
  }

  async findWhere(param:string,data:string): Promise<T[]> {
      const doc = await this.collection.where(`${param}`,'==',`${data}`).get()
      if (doc.empty) return [];
      return doc.docs.map((snapshot) => snapshot.data() as T) as T[];
  }

  async update(docId: string, data: Partial<T>): Promise<T> {
    await this.collection.doc(docId).update(data);
    const updatedDoc = await this.collection.doc(docId).get();
    if (updatedDoc.exists) {
      return updatedDoc.data() as T;
    } else {
      throw new Error('Failed to fetch updated document');
    }
  }

  async delete(docId: string): Promise<void> {
    await this.collection.doc(docId).delete();
  }
}

