import axios from "axios";
import { GET_PROFILE, AUTH_ERROR } from "./types";

// Get User
export const getUserById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/user/${id}`);
    console.log(res.data);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};
