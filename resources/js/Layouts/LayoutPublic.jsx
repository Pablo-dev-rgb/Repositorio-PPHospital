import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

const LayoutPublic = () =>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

export default LayoutPublic;