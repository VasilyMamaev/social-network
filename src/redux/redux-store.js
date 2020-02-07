import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer
})

let store = createStore(rootReducer)

export default store