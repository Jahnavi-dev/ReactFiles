import {applyMiddleware, legacy_createStore} from "redux"
import singleReducer from "../singleReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"; 

export const bookStore1=legacy_createStore(singleReducer, composeWithDevTools(applyMiddleware(thunk)))