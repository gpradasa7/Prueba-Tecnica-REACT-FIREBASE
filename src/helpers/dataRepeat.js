import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../Firebase/firebaseConfig";

const dataRepeat = () => {
  return async dispatch => {
    const q = query(
      collection(dataBase, "ordencompra"),
      where("Product", "==", true)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      console.log(doc.id, " => ", doc.data());
    });
    if (querySnapshot.exists()) {
      console.log("Document data:", querySnapshot.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
};

export default dataRepeat;
