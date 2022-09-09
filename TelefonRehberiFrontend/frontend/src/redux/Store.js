import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/AuthReducer";
import { addNewCommentReducer, commentUpdateDeleteReducer, getGroupCommentsDescReducer, getGroupCommentsReducer, getMyCommentsReducer } from "./reducers/CommentReducer";
import { addNewGroupReducer, getAllGroupReducer, getGroupDetailsReducer, getMyGroupsReducer, getUsersByGroupReducer, groupUpdateDeleteReducer } from "./reducers/GroupReducer";
import {
  addNewUserReducer,
  getAllUserReducer,
  getOrderByDescReducer,
  getUserDetailsReducer,
  getUsersByNameReducer,
  groupPeopleByLetterReducer,
  userReducer,
} from "./reducers/PersonReducer";
import { getAllUsersReducer } from "./reducers/UserReducer";

const rootReducer = combineReducers({
  getAllUser: getAllUserReducer,
  addNewUser: addNewUserReducer,
  user: userReducer,
  getUserDetails: getUserDetailsReducer,
  getUsersByName : getUsersByNameReducer,
  getAllGroup:getAllGroupReducer,
  addNewGroup: addNewGroupReducer,
  getUsersByGroup:getUsersByGroupReducer,
  getGroupDetails: getGroupDetailsReducer,
  groupUpdateDelete : groupUpdateDeleteReducer,
  auth : authReducer,
  getMyGroups : getMyGroupsReducer,
  groupPeopleByLetter: groupPeopleByLetterReducer,
  getOrderByDesc:getOrderByDescReducer,
  getAllUsers:getAllUsersReducer,
  getMyComments : getMyCommentsReducer,
  getGroupCommentsDesc : getGroupCommentsDescReducer,
  getGroupComments : getGroupCommentsReducer,
  addNewComment : addNewCommentReducer,
  commentUpdateDelete :commentUpdateDeleteReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
