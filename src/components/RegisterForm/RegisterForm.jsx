import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { regis } from "../../redux/actions";
import { connect } from "react-redux";

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

    props.dispatch(regis(form, history));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div>
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="Phone Number"
            onChange={handleChange}
            value={form.contact}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Set Password"
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default connect()(RegisterForm);
