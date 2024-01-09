import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const loginapi = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3000/api/auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};