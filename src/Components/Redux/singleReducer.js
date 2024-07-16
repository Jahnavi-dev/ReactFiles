import { combineReducers } from "redux";
import bookReducer1 from "./Redux1/reducer1";
import profileReducer from "./Redux2/ProfileDetails/reducersP";
import userReducer from "./Redux2Practice/reducerPractice";
import fakeStoreReducer from "./Redux2/fakeStoreAPI/reducer";
import CartReducer from "./Redux2/fakeStoreAPI/cartReducer";



const singleReducer=combineReducers({
    books:bookReducer1,
    profile:profileReducer,
    user:userReducer,
    products:fakeStoreReducer,
    cart:CartReducer
})

export default singleReducer;
 