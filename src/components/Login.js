import React from "react";
import { Link  } from "react-router-dom"
import "./Login.css";

import { useState, useEffect } from "react";
// import "./App.css";

function Login() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEnabled, setisEnabled]=useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    check()
    setFormValues({ ...formValues, [name]: value });
  };
  const check=()=>{
    if(formValues.username.length>0 && formValues.password.length>0){
        setisEnabled(true)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

//   const isEnabled =username.length > 0 && password.length > 0;

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.username || values.username!="admin") {
      errors.username = "Invalid Username";
    }
   
    if (!values.password || values.password!="admin") {
      errors.password = "Invalid Password";
    }
    return errors;
  };

  return (
    <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form onSubmit={handleSubmit}>
        <h1 class="formhead">Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <div><label>Username</label></div>
            <input
              autoComplete="off"
              class="inputBox"
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>

          <div className="field">
            <div><label>Password</label></div>
            <input
            autoComplete="off"
            class="inputBox"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <Link to="/search"><button className="fluid ui button blue" disabled={!isEnabled} >Submit</button></Link>
        </div>
      </form>
    </div>
  );
}

export default Login;