import React from 'react';
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Contacto() {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Cuéntanos, ¿En qué te podemos ayudar?
      </h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ingresa tu correo</Form.Label>
          <Form.Control type="email" placeholder="nombre@ejemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Añade tus comentarios</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Contacto;