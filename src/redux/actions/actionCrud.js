import { typesCRUD } from "../types/types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";

//-------------------GET----------------------------//

export const getDataAsync = () => {
  return async dispatch => {
    const Fcollection = await getDocs(
      collection(dataBase, "pedidoingredientes")
    );
    const pedido = [];
    Fcollection.forEach(listar => {
      pedido.push({
        ...listar.data(),
      });
    });
    dispatch(getDataSync(pedido));
  };
};

export const getDataSync = ingredientes => {
  return {
    type: typesCRUD.get,
    payload: ingredientes,
  };
};

export const getDataPedidosAsync = () => {
  return async dispatch => {
    const Pcollection = await getDocs(collection(dataBase, "ordencompra"));
    const orden = [];
    Pcollection.forEach(listar => {
      orden.push({
        ...listar.data(),
      });
    });
    dispatch(getDataPedidosSync(orden));
  };
};

export const getDataPedidosSync = pedido => {
  return {
    type: typesCRUD.getPedido,
    payload: pedido,
  };
};

//--------------POST-------------------------------//
export const actionAddAsync = dataArray => {
  return dispatch => {
    addDoc(collection(dataBase, "ordencompra"), Object.assign({}, dataArray))
      .then(resp => {
        dispatch(actionAddSync(dataArray));
      })
      .catch(error => {
        console.warn(error, "Datos no guardados");
      });
  };
};

export const actionAddSync = dataArray => {
  return {
    type: typesCRUD.post,
    payload: dataArray,
  };
};

//------------------------DELETE-------------------------------//
export const actionDeleteKeyAsync = key => {
  return async dispatch => {
    const collectionDelete = collection(dataBase, "ordencompra");
    const q = query(collectionDelete, where("key", "==", key));

    const dataQ = await getDocs(q);
    console.log(dataQ);

    dataQ.forEach(docu => {
      deleteDoc(doc(dataBase, "ordencompra", docu.id));
    });
    dispatch(actionDeleteKeySync(key));
  };
};

export const actionDeleteKeySync = key => {
  return {
    type: typesCRUD.delete,
    payload: key,
  };
};

//----------------EDITAR-----------------------------///
export const editKeyAsync = setCompra => {
  return async dispatch => {
    const collectionCompras = collection(dataBase, "ordencompra");
    const q = query(collectionCompras, where("key", "==", setCompra.key));
    const dataQ = await getDocs(q);
    let id = "";

    dataQ.forEach(async doc => {
      id = doc.id;
    });
    const docRef = doc(dataBase, "ordencompra", id);
    await updateDoc(docRef, setCompra)
      .then(resp => {
        dispatch(editKeySync(setCompra));
        dispatch(getDataPedidosAsync());
      })
      .catch(error => console.log(error));
  };
};

export const editKeySync = setCompra => {
  return {
    type: typesCRUD.edit,
    payload: { setCompra },
  };
};
