import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import HomeFakeStoreRedux from "./homeFakestore";
import CartFakeStoreRedux from "./cartFakestore";


const FakeStoreRouting=()=>{
    return(<React.Fragment>
        
        <BrowserRouter>
        <Routes>
            <Route path="/"Component={HomeFakeStoreRedux}/>
            {/* <Route path="/Product/:id"Component={ProductSection}/> */}
            <Route path="/Cart"Component={CartFakeStoreRedux}/>
        </Routes>
        </BrowserRouter>
    </React.Fragment>)
}

export default FakeStoreRouting;