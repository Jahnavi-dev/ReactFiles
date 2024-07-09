import { combineReducers } from "redux";
import bookReducer1 from "./Redux1/reducer1";
import profileReducer from "./Redux2/ProfileDetails/reducersP";
import userReducer from "./Redux2Practice/reducerPractice";


const singleReducer=combineReducers({
    books:bookReducer1,
    profile:profileReducer,
    user:userReducer
})

export default singleReducer;
 