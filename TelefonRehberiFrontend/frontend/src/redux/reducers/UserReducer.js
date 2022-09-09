import { GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS } from "../constants/PersonConstant";

export const getAllUsersReducer = (state = { users: [] }, action) => {
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
  