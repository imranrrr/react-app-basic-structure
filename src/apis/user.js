import { userSigninApi } from "../api";

export const userSignin = async (user) => {
  try {
    const response = await userSigninApi(user);
    return response;
  } catch (err) {
    console.log(err);
  }
};
