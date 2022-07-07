import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import {
  actionDeleteKeyAsync,
  editKeyAsync,
  getDataPedidosAsync,
} from "../redux/actions/actionCrud";

const Pedidos = ({ data }) => {
  const dispatch = useDispatch();
  const [datos, setDatos] = useState([]);
  const { pedidos } = useSelector(store => store.pedidosStore);
  console.log(pedidos);

  const [formValue, handleInputChange, reset] = useForm({
    product: datos.Product,
    items: datos.Items,
    price: datos.Price,
    quantity: datos.Quantity,
    key: datos.key,
    brand: datos.Brand,
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValue);
    dispatch(editKeyAsync(formValue));
    reset();
  };
  const handleDelete = key => {
    dispatch(actionDeleteKeyAsync(key));
  };

  const handlerEditar = pedidos => {
    setDatos(pedidos);
  };

  useEffect(() => {
    dispatch(getDataPedidosAsync());
  }, [dispatch]);

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ margin: "5%", marginLeft: "10%", marginRight: "10%" }}
    >
      <h1 style={{ textAlign: "center", color: "blue" }}>Pedidos</h1>
      <hr />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>key</Form.Label>
        <Form.Control
          type="text"
          name="key"
          value={formValue.key}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>product</Form.Label>
        <Form.Control
          type="text"
          name="product"
          value={formValue.product}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>items</Form.Label>
        <Form.Control
          type="text"
          name="items"
          value={formValue.items}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>price</Form.Label>
        <Form.Control
          type="text"
          name="price"
          value={formValue.price}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>quantity</Form.Label>
        <Form.Control
          type="text"
          name="quantity"
          value={formValue.quantity}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>brand</Form.Label>
        <Form.Control
          type="text"
          name="brand"
          value={formValue.brand}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button type="submit" variant="info">
        Editar
      </Button>
    </Form>
  );
};
export default Pedidos;
