import { collection, query, where, getDocs } from "firebase/firestore";
import { dataBase } from "../Firebase/firebaseConfig";

export const getUserInfo = email => {
  return new Promise((resolve, reject) => {
    try {
      const collectionUsers = collection(dataBase, "users");
      const querySnapshot = query(collectionUsers, where("email", "==", true));
      if (querySnapshot) {
        getDocs(querySnapshot).then(documents => {
          documents.forEach(document => {
            return resolve({
              id: document.id,
              ...document.data(),
            });
          });
        });
      } else {
        alert("El usuario ya existe");
      }
    } catch (error) {
      return reject(error);
    }
  });
};
