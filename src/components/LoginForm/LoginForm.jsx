import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";

import { login } from "../../redux/actions";

function LoginForm(props) {
  const history = useHistory();

  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setform({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));
    props.dispatch(login(form, history));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit" color="primary">
            Login
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default connect()(LoginForm);
