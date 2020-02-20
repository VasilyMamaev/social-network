import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
  ))

export default store