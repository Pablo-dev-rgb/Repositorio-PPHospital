import React from "react";
import Sidebar from "../pageclient/Sidebar";

const PanelClient = () =>{
    return(
        <div className="container bg-light">
            <div className="row justify-content-center mt-5 mb-5">
                <Sidebar/>
                <div className="col-sm-9">
                    <h1 className="text-center">Cliente</h1>
                </div>
            </div>
        </div>
    )
}

export default PanelClient;