import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();

export const archiveDeletedUser = functions.firestore
    .document('users/{uid}')
    .onDelete(async (snapshot, context) => {

        if(!snapshot.exists) return

        const data: any = snapshot.data();

        const userRef = db.doc(`deleted_users/${data.uid}`);

        return userRef.set(data);
    });

 