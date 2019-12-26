import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';


const db = admin.firestore();

export const deleteUserRecord = functions.auth
    .user()
    .onDelete((user, context) => {
        const userRef = db.doc(`users/${user.uid}`)

        return userRef.delete();
        // return userRef.set({

        //     name: user.displayName,
        //     createdAt: context.timestamp,
        //     nickname: 'rushin'
        // });
    });  