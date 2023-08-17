import axios from "axios";
import "dotenv/config";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "./redux/slices/auth";

const baseURL = "http://localhost:3000";

export const userSigninApi = async (user) => {
  postRequest({ url: "/users/login", data: { user: { ...user } } }, true);
};

const onError = function (error) {
  console.error("Request Failed:", error.config);
  if (error.response) {
    console.log(error.response);
    if (error.response.status == 401) {
      console.log("set user to null");
    }
    if (error.response.data) alert(error.response.data?.error);
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
    console.error("Headers:", error.response.headers);
  } else {
    console.error("Error Message:", error.message);
  }
  return Promise.reject(error.response || error.message);
};

const onSuccess = function (response) {
  debugger;
  return response.data;
};

const postRequest = async (request, auth = false) => {
  await axios
    .post(`${baseURL}/${request.url}`, request.data)
    .then(onSuccess)
    .catch(onError);
};
