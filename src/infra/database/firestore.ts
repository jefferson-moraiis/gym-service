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
    console.log("🚀 ~ file: firestore.ts:14 ~ FirestoreModel<T> ~ create ~ data:", data)
    const docRef = await this.collection.add(data).catch((error)=>{
      console.log(error)
    });
    console.log("docRef:", docRef)
    return docRef
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

  async update(docId: string, data: Partial<T>): Promise<void> {
    await this.collection.doc(docId).update(data);
  }

  async delete(docId: string): Promise<void> {
    await this.collection.doc(docId).delete();
  }
}

