import { DELETE_COMMENT_FAIL, DELETE_COMMENT_REQUEST, DELETE_COMMENT_RESET, DELETE_COMMENT_SUCCESS, GET_COMMENTS_BY_GROUP_ID_FAIL, GET_COMMENTS_BY_GROUP_ID_REQUEST, GET_COMMENTS_BY_GROUP_ID_SUCCESS, GET_COMMENTS_BY_USER_ID_FAIL, GET_COMMENTS_BY_USER_ID_REQUEST, GET_COMMENTS_BY_USER_ID_SUCCESS, GET_COMMENTS_IN_GROUP_DESC_FAIL, GET_COMMENTS_IN_GROUP_DESC_REQUEST, GET_COMMENTS_IN_GROUP_DESC_SUCCESS, GET_COMMENT_LIKES_FAIL, GET_COMMENT_LIKES_REQUEST, GET_COMMENT_LIKES_SUCCESS, POST_COMMENT_FAIL, POST_COMMENT_REQUEST, POST_COMMENT_RESET, POST_COMMENT_SUCCESS, UPDATE_COMMENT_FAIL, UPDATE_COMMENT_REQUEST, UPDATE_COMMENT_RESET, UPDATE_COMMENT_SUCCESS } from "../constants/CommentConstants";

export const getMyCommentsReducer = (state = { comments: [] }, action) => {
    switch (action.type) {
      case GET_COMMENTS_BY_USER_ID_REQUEST:
        return { ...state, loading: true };
  
      case GET_COMMENTS_BY_USER_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          comments: action.payload,
        };
  
      case GET_COMMENTS_BY_USER_ID_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const getGroupCommentsDescReducer = (state = { comments: [] }, action) => {
    switch (action.type) {
      case GET_COMMENTS_IN_GROUP_DESC_REQUEST:
        return { ...state, loading: true };
  
      case GET_COMMENTS_IN_GROUP_DESC_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          comments: action.payload,
        };
  
      case GET_COMMENTS_IN_GROUP_DESC_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const getGroupCommentsReducer = (state = { comments: [] }, action) => {
    switch (action.type) {
      case GET_COMMENTS_BY_GROUP_ID_REQUEST:
        return { ...state, loading: true };
  
      case GET_COMMENTS_BY_GROUP_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          comments: action.payload,
        };
  
      case GET_COMMENTS_BY_GROUP_ID_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const addNewCommentReducer = (state = { comment: {} }, action) => {
    switch (action.type) {
      case POST_COMMENT_REQUEST:
        return { ...state, loading: true };
  
      case POST_COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          comment: action.payload,
        };
  
      case POST_COMMENT_FAIL:
        return { ...state, loading: false, error: action.payload };
      case POST_COMMENT_RESET:
        return { ...state, success: false };
  
      default:
        return state;
    }
  };
  

  export const commentUpdateDeleteReducer = (
    state = { updated: {}, deleted: false },
    action
  ) => {
    switch (action.type) {
      case DELETE_COMMENT_REQUEST:
      case UPDATE_COMMENT_REQUEST:
        return { ...state, loading: true };
  
      case DELETE_COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          deleted: true,
        };
  
      case UPDATE_COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          updated: action.payload,
          updateSuccess: true,
        };
  
      case DELETE_COMMENT_FAIL:
      case UPDATE_COMMENT_FAIL:
        return { ...state, error: action.payload };
  
      case DELETE_COMMENT_RESET:
        return {
          ...state,
          deleted: false,
        };
      case UPDATE_COMMENT_RESET:
        return {
          ...state,
          updateSuccess: false,
        };
      default:
        return state;
    }
  };
  

  export const getCommentLikesReducer = (state = { comments: [] }, action) => {
    switch (action.type) {
      case GET_COMMENT_LIKES_REQUEST:
        return { ...state, loading: true };
  
      case GET_COMMENT_LIKES_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          comments : action.payload,
        };
  
      case GET_COMMENT_LIKES_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };