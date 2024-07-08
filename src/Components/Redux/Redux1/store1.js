import {legacy_createStore} from "redux"
import bookReducer1 from "./reducer1"




export const bookStore1=legacy_createStore(bookReducer1)