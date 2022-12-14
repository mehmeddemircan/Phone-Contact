import {
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_RESET,
  ADD_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_RESET,
  DELETE_USER_SUCCESS,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_USERS_BY_NAME_FAIL,
  GET_USERS_BY_NAME_REQUEST,
  GET_USERS_BY_NAME_SUCCESS,
  GET_USER_DETAILS_FAIL,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_RESET,
  UPDATE_USER_SUCCESS,
} from "../constants/UserConstant";

export const getAllUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_ALL_USER_REQUEST:
      return { ...state, loading: true };

    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        users: action.payload,
      };

    case GET_ALL_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case GET_USER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      };

    case GET_USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const addNewUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return { ...state, loading: true };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      };

    case ADD_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_USER_RESET:
      return {
        ...state,
        success: false,
      };

    default:
      return state;
  }
};

export const userReducer = (state = { updated: {} }, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
    case UPDATE_USER_REQUEST:
      return { ...state, loading: true };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        updated: action.payload,
        updateSuccess: true,
      };

    case DELETE_USER_FAIL:
    case UPDATE_USER_FAIL:
      return { ...state, error: action.payload };

    case DELETE_USER_RESET:
      return {
        ...state,
        deleted: false,
      };
    case UPDATE_USER_RESET:
      return {
        ...state,
        updateSuccess: false,
      };
    default:
      return state;
  }
};

export const getUsersByNameReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS_BY_NAME_REQUEST:
      return { ...state, loading: true };

    case GET_USERS_BY_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        users: action.payload,
      };

    case GET_USERS_BY_NAME_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
