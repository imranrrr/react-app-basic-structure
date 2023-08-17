import React from "react";
import axios from "axios";
import { SERVER_URL } from "../helpers/variable";
import { loginSuccess, logoutSuccess } from "../redux/slices/auth";
import store from "../redux/store";

export default function Auth() {
  const login = async (user) => {
    await axios
      .post(`${SERVER_URL}/users/login`, { user: { ...user } })
      .then((response) => {
        store.dispatch(
          loginSuccess({
            user: response.data.user,
            token: response.headers.authorization,
          })
        );
      })
      .catch((error) => {
        store.dispatch(logoutSuccess());
      });
  };

  const logout = async (user) => {
    await axios
      .post(`${SERVER_URL}/users/logout`)
      .then((response) => {
        store.dispatch(logoutSuccess());
      })
      .catch((error) => {
        store.dispatch(logoutSuccess());
      });
  };

  return { login };
}
