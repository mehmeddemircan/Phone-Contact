import {
  ADD_GROUP_FAIL,
  ADD_GROUP_REQUEST,
  ADD_GROUP_SUCCESS,
  DELETE_GROUP_FAIL,
  DELETE_GROUP_REQUEST,
  DELETE_GROUP_SUCCESS,
  GET_ALL_GROUP_FAIL,
  GET_ALL_GROUP_REQUEST,
  GET_ALL_GROUP_SUCCESS,
  GET_GROUP_DETAILS_FAIL,
  GET_GROUP_DETAILS_REQUEST,
  GET_GROUP_DETAILS_SUCCESS,
  GET_GROUP_USERS_FAIL,
  GET_GROUP_USERS_REQUEST,
  GET_GROUP_USERS_SUCCESS,
  GET_MY_GROUPS_FAIL,
  GET_MY_GROUPS_REQUEST,
  GET_MY_GROUPS_SUCCESS,
  UPDATE_GROUP_FAIL,
  UPDATE_GROUP_REQUEST,
  UPDATE_GROUP_SUCCESS,
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
      `https://localhost:7046/api/Persons/groups/${id}/allPersons`
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

export const DeleteGroup = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_GROUP_REQUEST,
    });

    const { data } = await axios.delete(
      `https://localhost:7046/api/Groups/${id}`
    );

    dispatch({
      type: DELETE_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_GROUP_FAIL,
      payload: error.message,
    });
  }
};

export const UpdateGroup = (id,group) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_GROUP_REQUEST,
    });

    const { data } = await axios.put(
      `https://localhost:7046/api/Groups/${id}`,group
    );

    dispatch({
      type: UPDATE_GROUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_GROUP_FAIL,
      payload: error.message,
    });
  }
};



export const GetMyGroups = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_MY_GROUPS_REQUEST,
    });

    const {data} = await axios.get(`https://localhost:7046/user/${id}/myGroups`)

    dispatch({
      type: GET_MY_GROUPS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MY_GROUPS_FAIL,
      payload: error.message,
    });
  }
};