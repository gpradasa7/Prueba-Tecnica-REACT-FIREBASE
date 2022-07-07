import { Button, Table, Form } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionAddAsync, getDataAsync } from "../redux/actions/actionCrud";
import "../styles/tableStyles.css";

const App = () => {
  const dispatch = useDispatch();
  const { crud } = useSelector(store => store.crudStore);

  const handleSubmit = e => {
    e.preventDefault();
    alert("Pedido Realizado con éxito, revisa la sección de pedidos");
    dispatch(actionAddAsync(dataDelivery));
  };

  const columns = [
    {
      title: "product",
      dataIndex: "Product",
    },
    {
      title: "brand",
      dataIndex: "Brand",
    },
    {
      title: "items",
      dataIndex: "Items",
    },
    {
      title: "quantity",
      dataIndex: "Quantity",
    },
    {
      title: "price",
      dataIndex: "Price",
    },
  ];
  const dataIng = [];
  const { key } = dataIng;
  let acum = [];
  for (let i = 0; i < crud.length; i++) {
    dataIng.push({
      key: i,
      Product: `${crud[i].product}`,
      Brand: `${crud[i].brand}`,
      Items: `${crud[i].items}`,
      Quantity: `${crud[i].quantity}`,
      Price: `${Number(crud[i].price)}`,
    });
  }

  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = newSelectedRowKeys => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    onChange: onSelectChange,
  };
  const delivery = 7;
  selectedRowKeys.map((ing, index) => (
    <div key={index}>
      {(acum = (Number(acum) + Number(dataIng[ing].Price)).toFixed(2))}
    </div>
  ));
  const TotalDelivery = (Number(acum) + Number(delivery)).toFixed(2);
  const dataDelivery = [];
  selectedRowKeys.map((ing, index) => (
    <div key={index}>
      {dataDelivery.push({
        key: `${dataIng[ing].key}`,
        Product: `${dataIng[ing].Product}`,
        Items: `${dataIng[ing].Items}`,
        Quantity: `${dataIng[ing].Quantity}`,
        Price: `${Number(dataIng[ing].Price)}`,
      })}
    </div>
  ));
  const totalArray = {
    Items: selectedRowKeys.length,
    Subtotal: acum,
    GastosEnvio: delivery,
    totalDelivery: TotalDelivery,
  };
  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataIng}
      />
      <div
        style={{
          marginBottom: 16,
        }}
      >
        {" "}
        <article className="box" key={key}>
          <span> Items: {selectedRowKeys.length}</span>
          <span> Subtotal: {acum}</span>
          <span> Gastos de Envío: {delivery}.00</span>
          <span className="total"> Total: $ {TotalDelivery}</span>
        </article>
        <Button className="buyButton" onClick={handleSubmit}>
          <span> Comprar Ingredientes:</span>
          <span>{TotalDelivery}</span>
        </Button>
      </div>
      {selectedRowKeys.map((ing, index) => (
        <Form key={index} onSubmit={handleSubmit}>
          <article style={{ borderBottom: "thin solid gray" }} className="box">
            <h4> {dataIng[ing].Product}</h4>
            <h5>
              ${dataIng[ing].Price} x {dataIng[ing].Quantity}
            </h5>
          </article>
        </Form>
      ))}
    </div>
  );
};

export default App;
