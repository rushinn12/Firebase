import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();


export const onMediaUpload = functions.storage
    .object()
    .onFinalize(async (object) => {


        const mediaRef = db.collection('medias').doc(object.id)
        const data = {
            'bucket': object.bucket,
            'name': object.name,
            'metadata': object.metadata,
            'mediaLink': object.mediaLink,
            'id': object.id
        }

        return mediaRef.set(data)
    });


export const onMediaDelete = functions.storage
    .object()
    .onDelete(async (object) => {
        const mediaRef = db.collection('medias').doc(object.id)
        return mediaRef.delete();
    });