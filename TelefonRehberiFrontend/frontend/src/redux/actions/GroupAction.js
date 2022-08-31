import {
  ADD_GROUP_FAIL,
  ADD_GROUP_REQUEST,
  ADD_GROUP_SUCCESS,
  GET_ALL_GROUP_FAIL,
  GET_ALL_GROUP_REQUEST,
  GET_ALL_GROUP_SUCCESS,
  GET_GROUP_DETAILS_FAIL,
  GET_GROUP_DETAILS_REQUEST,
  GET_GROUP_DETAILS_SUCCESS,
  GET_GROUP_USERS_FAIL,
  GET_GROUP_USERS_REQUEST,
  GET_GROUP_USERS_SUCCESS,
} from "../constants/GroupConstants";
import axios from "axios";
export const AllGroup = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_GROUP_REQUEST,
    });

    const { data } = await axios.get("https://localhost:7046/api/Groups");

    dispatch({
      type: GET_ALL_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_GROUP_FAIL,
      error: error.response,
    });
  }
};

export const AddGroup = (group) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_GROUP_REQUEST,
    });

    const { data } = await axios.post(
      "https://localhost:7046/api/Groups",
      group
    );

    dispatch({
      type: ADD_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_GROUP_FAIL,
      payload: error.message,
    });
  }
};

export const GetUsersInGroup = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_GROUP_USERS_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7046/api/Users/groups/${id}/allUsers`
    );

    dispatch({
      type: GET_GROUP_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_GROUP_USERS_FAIL,
      payload: error.message,
    });
  }
};


export const GetGroupDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_GROUP_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7046/api/Groups/groupdetails/${id}`
    );

    dispatch({
      type: GET_GROUP_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_GROUP_DETAILS_FAIL,
      payload: error.message,
    });
  }
};