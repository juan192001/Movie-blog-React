import { collection, addDoc, getDocs, deleteDoc,doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../firebase';


const addToFirebase = async ({ objectToSave }, collectionName) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), objectToSave);
    console.log(
      "Document written to table " + collectionName + " with ID: ",
      docRef.id
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//TODO: Implement this function
const getFromFirebase = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return documents;
  } catch (e) {
    console.error("Error getting documents: ", e);
    return null;
  }
};
const updateFromFirebase = async (docId,objectToUpdate, collectionName) => {
    try{
        const docRef= doc(db,collectionName,docId);
        await updateDoc(docRef,objectToUpdate);
        console.log("Document updated in collection"+collectionName+" with ID",docId)
    }
    catch(e){
        console.log("Error updating",e)
    }

};
const getFromFirebaseID = async (collectionName, id) => {
    try {
      const documentRef = doc(db,collectionName,id);
      const documentSnapshot = await getDoc(documentRef)
      if(documentSnapshot.exists()){
        return { id: documentSnapshot.id, ...documentSnapshot.data() };
      }
      else{;
        console.log('No se encontro');
        return null;
      }
    } catch (error) {
      console.error('Error getting document: ', error);
      return null;
    }
  };

const deleteFromFirebase = async (docId, collectionName) => {
  try {
    await deleteDoc(doc(db, collectionName, docId)); 
    console.log("Document deleted from table " + collectionName + " with ID: " + docId);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
export { addToFirebase, getFromFirebase, updateFromFirebase, deleteFromFirebase, getFromFirebaseID };