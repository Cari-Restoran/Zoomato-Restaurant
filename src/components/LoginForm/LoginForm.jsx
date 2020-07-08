import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

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
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default connect()(LoginForm);
