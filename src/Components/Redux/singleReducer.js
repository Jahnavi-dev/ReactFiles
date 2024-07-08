import { combineReducers } from "redux";
import bookReducer1 from "./Redux1/reducer1";
import profileReducer from "./Redux2/ProfileDetails/reducersP";


const singleReducer=combineReducers({
    books:bookReducer1,
    profile:profileReducer
})

export default singleReducer;
 