import Signin from "../pages/auth/Signin";
import Home from "../pages/app/Home";
export const routes = [
  {
    isPrivate: false,
    component: Signin,
    path: "/signin",
  },
  {
    isPrivate: true,
    component: Home,
    path: "/",
  },
];
