/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import RegisterForm from "../RegisterForm/RegisterForm";

function ButtonRegister(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        style={{
          background: "#f4404c",
          fontFamily: "Zoomato",
          fontSize: "30px",
          width: "5em",
          margin: "0 1em",
        }}
        onClick={toggle}
      >
        Sign Up
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Register Form</ModalHeader>
        <ModalBody>
          <RegisterForm />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ButtonRegister;
