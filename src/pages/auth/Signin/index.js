import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useAuthenticate from "../../hooks/useAuthenticate";
import { USER_STORAGE_KEY } from "../../helpers/variables";

const SignIn = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuthenticate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    for (let key in user) {
      if (!user[key]) return alert(`${key} is required!`);
    }
    if (user.email && user.password) {
      const { userObject } = await login(user, userType);

      if (userObject) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userObject));
        userType === "customer" ? navigate("/") : navigate("/productstable");
      }
    }
  }

  // useEffect(() => {
  //   return <redirect to="/" />
  // }
  //   , [redirect, setRedirect])

  return (
    <Grid>
      <div className="signIn">
        <div className="signIn__imageContainer">
          <img
            src={require("../../assets/girl.jpg")}
            alt=""
            className="signIn__imageContainer__image"
          />
        </div>
        <form onSubmit={handleSubmit} className="signIn__formContainer">
          <h1>Sign In</h1>
          <div className="signIn__formContainer__input">
            <TextField
              id="outlined-basic1"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              sx={{ width: "300px" }}
              onChange={(e) => handleChange(e)}
            />
            <EmailIcon
              sx={{
                position: "absolute",
                marginLeft: "-35px",
                marginTop: "15px",
              }}
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
            <VisibilityIcon
              sx={{
                position: "absolute",
                marginLeft: "-35px",
                marginTop: "15px",
                cursor: "pointer",
              }}
              onClick={() =>
                setPasswordType((pS) => {
                  if (pS === "password") return "text";
                  else return "password";
                })
              }
            />
          </div>
          <div
            style={{
              marginBottom: "1rem",
              width: "100%",
            }}
          >
            <input
              type="radio"
              name="userType"
              id="customer"
              value={userType}
              onChange={() => setUserType("customer")}
              checked
            />
            <label htmlFor="customer">Customer</label>
            <input
              type="radio"
              name="userType"
              id="admin"
              value={userType}
              onChange={() => setUserType("admin")}
            />
            <label htmlFor="admin">Admin</label>
          </div>
          <div>
            <Button
              variant="contained"
              className="signIn__formContainer__button"
              type="submit"
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

export default SignIn;
