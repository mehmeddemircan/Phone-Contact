import axios from "axios";
import {
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  GET_COMMENTS_BY_GROUP_ID_FAIL,
  GET_COMMENTS_BY_GROUP_ID_REQUEST,
  GET_COMMENTS_BY_GROUP_ID_SUCCESS,
  GET_COMMENTS_BY_USER_ID_FAIL,
  GET_COMMENTS_BY_USER_ID_REQUEST,
  GET_COMMENTS_BY_USER_ID_SUCCESS,
  GET_COMMENTS_IN_GROUP_DESC_FAIL,
  GET_COMMENTS_IN_GROUP_DESC_REQUEST,
  GET_COMMENTS_IN_GROUP_DESC_SUCCESS,
  GET_COMMENT_LIKES_FAIL,
  GET_COMMENT_LIKES_REQUEST,
  GET_COMMENT_LIKES_SUCCESS,
  POST_COMMENT_FAIL,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAIL,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
} from "../constants/CommentConstants";

export const AllUserComments = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COMMENTS_BY_USER_ID_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7046/api/Comments/${userId}/all-comment`
    );

    dispatch({
      type: GET_COMMENTS_BY_USER_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENTS_BY_USER_ID_FAIL,
      error: error.response,
    });
  }
};

export const GroupCommentsDesc = (groupId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COMMENTS_IN_GROUP_DESC_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7046/api/Comments/${groupId}/orderBy-desc`
    );

    dispatch({
      type: GET_COMMENTS_IN_GROUP_DESC_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENTS_IN_GROUP_DESC_FAIL,
      error: error.response,
    });
  }
};

export const AllGroupComment = (groupId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COMMENTS_BY_GROUP_ID_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7046/api/Comments/${groupId}/getAll`
    );

    dispatch({
      type: GET_COMMENTS_BY_GROUP_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENTS_BY_GROUP_ID_FAIL,
      error: error.response,
    });
  }
};


export const AddComment = (comment) => async (dispatch) => {
  try {
    dispatch({
      type: POST_COMMENT_REQUEST,
    });

    const { data } = await axios.post(
      `https://localhost:7046/api/Comments/create-comment`,comment
    );

    dispatch({
      type: POST_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_COMMENT_FAIL,
      error: error.response,
    });
  }
};


export const DeleteComment = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_COMMENT_REQUEST,
    });

    const { data } = await axios.delete(
      `https://localhost:7046/api/Comments/comment/${id}/delete`
    );

    dispatch({
      type: DELETE_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COMMENT_FAIL,
      error: error.response,
    });
  }
};



export const UpdateComment = (id,comment) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_COMMENT_REQUEST,
    });

    const { data } = await axios.put(
      `https://localhost:7046/api/Comments/comment/${id}/update-comment`
      ,comment
    );

    dispatch({
      type: UPDATE_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_COMMENT_FAIL,
      error: error.response,
    });
  }
};

export const GetCommentLikes = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COMMENT_LIKES_REQUEST,
    });

    const { data } = await axios.get(
      `https://localhost:7046/${id}/comment-likes`
     
    );

    dispatch({
      type: GET_COMMENT_LIKES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENT_LIKES_FAIL,
      error: error.response,
    });
  }
};

