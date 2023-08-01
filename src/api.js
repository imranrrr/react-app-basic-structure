import axios from "axios";
import "dotenv/config";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "./redux/slices/auth";
export const userSigninApi = (user) => {
  request({
    url: `/api/users/signin`,
    method: "POST",
    data: { ...user },
  });
};

const client = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

const request = function (options) {
  const onSuccess = function (response) {
    return response.data;
  };

  const onError = function (error) {
    console.error("Request Failed:", error.config);

    if (error.response) {
      console.log(error.response);
      // Request was made but server responded with something
      // other than 2xx
      if (error.response.status == 401) {
        console.log("set user to null");
        useDispatch(logoutSuccess());
      }
      if (error.response.data) alert(error.response.data?.error);
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};
