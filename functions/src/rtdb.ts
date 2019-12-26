import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.database()


export const handleRequest = functions.database
    .ref('request/{id}')
    .onCreate(async (snapshot, context) => {
        const data = snapshot.toJSON()

        const responseRef = db.ref(`response/${context.params.id}`)
        return responseRef.set(data);
    });