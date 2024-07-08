import {legacy_createStore} from "redux"
import singleReducer from "../singleReducer"





export const bookStore1=legacy_createStore(singleReducer)