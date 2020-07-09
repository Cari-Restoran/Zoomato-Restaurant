import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import swal from "sweetalert";

import { regis } from "../../redux/actions";

function RegisterForm(props) {
  const history = useHistory();
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

  const handleChange = (event) => {
    setform({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name === "" || form.contact === "" || form.email === "") {
      swal(
        "Warning",
        "You need to complete all information in the registration form!",
        "warning"
      );
    } else {
      props.dispatch(regis(form, history));
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={handleChange}
            value={form.name}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={form.email}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="contact"
            id="contact"
            placeholder="Phone Number"
            onChange={handleChange}
            value={form.contact}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Set Password"
            onChange={handleChange}
            value={form.password}
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit" color="primary">
            Create Account
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default connect()(RegisterForm);
