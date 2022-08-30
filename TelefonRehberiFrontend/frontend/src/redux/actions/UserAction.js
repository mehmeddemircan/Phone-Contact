import {
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAIL,
  GET_USERS_BY_NAME_REQUEST,
  GET_USERS_BY_NAME_SUCCESS,
  GET_USERS_BY_NAME_FAIL
} from "../constants/UserConstant";
import axios from "axios";
export const AllUser = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_USER_REQUEST,
    });

    const { data } = await axios.get("https://localhost:7046/api/Users");

    dispatch({
      type: GET_ALL_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USER_FAIL,
      error: error.response,
    });
  }
};

export const AddUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_USER_REQUEST,
    });

    const { data } = await axios.post("https://localhost:7046/api/Users", user);

    dispatch({
      type: ADD_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_USER_FAIL,
      payload: error.message,
    });
  }
};

export const DeleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER_REQUEST,
    });

    const { data } = await axios.delete(
      `https://localhost:7046/api/Users/${id}`
    );

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.message,
    });
  }
};

export const UpdateUser = (id,user) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });

    const { data } = await axios.put(
      `https://localhost:7046/api/Users/${id}`,user
    );

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.message,
    });
  }
};

export const GetUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7046/api/Users/${id}`
    );

    dispatch({
      type: GET_USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const GetUsersByName = (searchedName) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERS_BY_NAME_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7046/api/Users/users/${searchedName}`
    );

    dispatch({
      type: GET_USERS_BY_NAME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_BY_NAME_FAIL,
      payload: error.message,
    });
  }
};


