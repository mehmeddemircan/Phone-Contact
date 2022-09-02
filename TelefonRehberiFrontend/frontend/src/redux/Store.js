import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/AuthReducer";
import { addNewGroupReducer, getAllGroupReducer, getGroupDetailsReducer, getUsersByGroupReducer, groupUpdateDeleteReducer } from "./reducers/GroupReducer";
import {
  addNewUserReducer,
  getAllUserReducer,
  getUserDetailsReducer,
  getUsersByNameReducer,
  userReducer,
} from "./reducers/PersonReducer";

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
  auth : authReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
