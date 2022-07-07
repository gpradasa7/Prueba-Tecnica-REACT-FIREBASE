import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "../Firebase/firebaseConfig";

const DataFirebase = () => {
  const url = "https://recipe-rissoto.vercel.app/recipe";
  const loadAPI = async url => {
    const resp = await fetch(url);
    const data = await resp.json();

    //  enviarAFirebase(data.ingredients);
  };
  loadAPI(url);

  const enviarAFirebase = data => {
    data.forEach(data => {
      const { product, brand, items, quantity, price } = data;

      // asignar lo que estoy capturando en la apiKey a collecion de firestore
      const cargarDatos = {
        product,
        brand,
        items,
        quantity,
        price,
      };

      addDoc(collection(dataBase, "pedidoingredientes"), cargarDatos)
        .then(resp => console.log("Datos agregado"))
        .catch(error => console.warn(error));
    });
  };
  return () => {
    <div>Plato del día</div>;
  };
};

export default DataFirebase;
