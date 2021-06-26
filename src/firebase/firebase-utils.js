import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDPAdAfroa9FteqZeIG4DrR_3dd8129__o",
    authDomain: "crown-db-a6e33.firebaseapp.com",
    projectId: "crown-db-a6e33",
    storageBucket: "crown-db-a6e33.appspot.com",
    messagingSenderId: "551711113875",
    appId: "1:551711113875:web:c48cd4b92e766974dc0366"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt : "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDoc = async (userAuth, additionalData) => {

    if (userAuth) {
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const docSnapshot = await userRef.get();

        if(!docSnapshot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData   
                })
            } catch (e) {
                console.log("Error in storing user data"+e.errorMessage)
            }
        }
        
        return userRef;
    }
}

export const addCollectionAndDocuments = async (collection , documentsToAdd) => {
    const collectionRef = firestore.collection(collection);

    const batch = firestore.batch();

    documentsToAdd.forEach(doc => {
        const newDoc = collectionRef.doc();
        batch.set(newDoc, doc); 
    });

    return await batch.commit();
}

export const convertCollectionToMap = (collections) => {

    const collectionArray = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title),
            items,
            title
        };
    });

    return collectionArray.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export const getUserAuth = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject());
    });
}

export default firebase;