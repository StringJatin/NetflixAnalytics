import axios from "axios";
import { loginFailure, loginStart, loginSuccess} from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("https://netflix-analytics-4u5n.vercel.app/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

