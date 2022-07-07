import React from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authentication, user } from "../Firebase/firebaseConfig";
import { actionLogoutAsyn } from "../redux/actions/actionLogin";

const NavBars = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Navbar
        style={{
          display: "flex",
          width: "100%",
          padding: "3% 5%",
        }}
      >
        <Container
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Navbar.Brand>AGREGAR INGREDIENTES A LA COMPRA</Navbar.Brand>
          <Nav className="me-auto">
            <Link
              to="/home"
              style={{
                padding: "0 150px",
              }}
            >
              Home
            </Link>
            <Link
              to="/receta"
              style={{
                padding: "0 150px",
              }}
            >
              Receta
            </Link>
            <Link
              to="/pedidos"
              style={{
                padding: "0 150px",
              }}
            >
              Pedidos
            </Link>
          </Nav>
        </Container>
        <Nav>
          <span>Hi! {authentication.currentUser.displayName} </span>
          <Button
            variant="outline-primary"
            onClick={() => dispatch(actionLogoutAsyn())}
          >
            <Image
              width="25%"
              src="https://res.cloudinary.com/danimel/image/upload/v1635784501/login_1_p33a7m.png"
            />
          </Button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBars;
