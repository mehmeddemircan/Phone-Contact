import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants/AuthConstants";
import axios from 'axios'
export const login = (user) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const res = await axios.post("https://localhost:7046/api/Auth/login", {
        ...user,config
      });
      if (res.status >= 200 && res.status <= 205) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    //   const { data } = await axios.post(
    //     "https://localhost:7046/api/Auth/login",
    //     user,
    //     config
    //   );
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload:{
            token,
            user
        },
      });
    }
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.errors,
      });
    }
  };


  // it provides when you refres the page , it kept you logged in to website
export const isUserLoggedIn = () => {
    return async (dispatch) => {
      const token = localStorage.getItem("token");
      if (token) {
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: { error: "Failed to login" },
        });
      }
    };
  };

  // Logout
export const logout = () => async (dispatch) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  
    dispatch({ type: LOGOUT_SUCCESS });
  };