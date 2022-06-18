import { useState, useEffect } from 'react';
import { projectFireStore } from '../components/firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        projectFirestore.collection(collection).onSnapshot((snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            }
            );
            setDocs(documents);
        }
            , (err) => {
                console.log(err);
            }
        );
    }, [collection]);

    return { docs };
}