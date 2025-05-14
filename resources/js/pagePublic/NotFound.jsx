import React from "react";
import { Link } from "react-router-dom";

export default function PageHome(){
    return(
        <div className="container min-vh-100">
            <div className="mt-5 mb-5 pt-5 pb-5 text-center">
                <h1>UPS! ...NotFound</h1>
                <Link to={"/"} className="mt-5 btn btn-secondary rounded-pill pe-5 ps-5">Volver Inicio</Link>
            </div>
        </div>
    )
}