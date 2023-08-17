import { userSigninApi } from "../api";

export const userSignin = async (user) => {
  try {
    const response = await userSigninApi(user);
    // await fetch("http://localhost:3000/users/login", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     user: {
    //       email: "emran@gmail.com",
    //       password: "admin@123",
    //     },
    //   }),
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       console.log(res.headers.get("Authorization"));
    //       localStorage.setItem("token", res.headers.get("Authorization"));
    //       return res.json();
    //     } else {
    //       throw new Error(res);
    //     }
    //   })
    //   .then((json) => console.dir(json))
    //   .catch((err) => console.error(err));
    // debugger;

    return response;
  } catch (err) {
    console.log(err);
  }
};
