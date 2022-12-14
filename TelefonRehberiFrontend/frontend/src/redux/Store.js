import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  addNewUserReducer,
  getAllUserReducer,
  getUserDetailsReducer,
  getUsersByNameReducer,
  userReducer,
} from "./reducers/UserReducer";

const rootReducer = combineReducers({
  getAllUser: getAllUserReducer,
  addNewUser: addNewUserReducer,
  user: userReducer,
  getUserDetails: getUserDetailsReducer,
  getUsersByName : getUsersByNameReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
