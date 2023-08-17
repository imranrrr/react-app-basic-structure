import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../../apis/Auth";
import { useDispatch } from "react-redux";
import { loginSuccess, logoutSuccess } from "../../../redux/slices/auth";

const Signin = () => {
  const navigate = useNavigate();
  const { login } = Auth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const { login } = useAuthenticate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  async function handleSubmit(e) {
    const response = await login(user);
    navigate("/");
  }

  return (
    <Grid>
      <div className="signIn">
        <form className="signIn__formContainer">
          <h1>Sign In</h1>
          <div classNamenp="signIn__formContainer__input">
            <TextField
              id="outlined-basic1"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              sx={{ width: "300px" }}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="signIn__formContainer__input">
            <TextField
              id="outlined-basic2"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              sx={{ width: "300px" }}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <Button
              variant="contained"
              className="signIn__formContainer__button"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </div>
          <Link to="/signup" className="signIn__formContainer__link">
            Don't have an account? Sign up Now!
          </Link>
        </form>
      </div>
    </Grid>
  );
};

export default Signin;
