
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const submitContactForm = async (data) => {
  try {
    await addDoc(collection(db, "contacts"), {
      ...data,
      timestamp: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export const submitProjectOrder = async (data) => {
  try {
    await addDoc(collection(db, "project_orders"), {
      ...data,
      timestamp: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};
