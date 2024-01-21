import { db } from "../auth/firebase";

import { 
    collection, 
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const namesCollectionRef = collection(db, "names");
class namesDataService {
    addNames = (newName) => {
        return addDoc(namesCollectionRef, newName);
    };

    updateName = (id, updatedName) => {
        const nameDoc = doc(db, "names", id);
        return updateDoc(nameDoc, updatedName);
    };

    deleteName = (id) => {
        const nameDoc = doc(db, "names", id);
        return deleteDoc(nameDoc);
    };

    getAllBooks = () => {
        return getDocs(namesCollectionRef);
    }

    getName = (id) => {
        const nameDoc = doc(db, "names", id);
        return getDoc(nameDoc);
    }

}

export default new namesDataService();

