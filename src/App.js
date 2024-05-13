import {React} from "react";
import HeadFComp from "./Components/functional/heading/head1"

import "./Components/functional/heading/head1_style.css"

import { Head2Comp } from "./Components/functional/heading/head2";
import Head3Comp from "./Components/functional/heading/head3";
import CarouselComp from "./Components/functional/Carousel/carousel1";
import NavbarComp from "./Components/functional/Navbar/navbar";



const App=()=>{
  return(
    <>
    <CarouselComp/>
    <NavbarComp/>
    <HeadFComp/>
    <Head2Comp/>
    <Head3Comp/>
    </>
  )
}

export default App