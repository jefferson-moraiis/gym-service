import * as admin from 'firebase-admin';
import path from 'path';


export async function connect(){
     await admin.initializeApp({
        credential: admin.credential.cert(path.resolve(
          __dirname,'../../credentials.json'
        )),
        databaseURL: 'https://gym-app-59167.firebaseio.com' 
      })
}