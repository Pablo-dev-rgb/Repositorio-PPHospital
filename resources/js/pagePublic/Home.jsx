import React, { useEffect, useState } from "react";
import Config from "../Config";

const Home = () =>{
    const [empresas, setEmpresas] = useState([])
    
    useEffect(()=>{
        getEmpresas()
    },[])
    
    const getEmpresas= async()=>{
        const response = await Config.getEmpresas(5)
        console.log(response.data)
        setEmpresas(response.data)
    }
    return(
        <div className="container pt-5 pb-5">
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    <h1 className="text-center fw-bolder">Directorio de Empresas</h1>
                        <div className="card">
                            <div className="card-body">
                                
                            </div>
                        </div>
                </div>
            </div>
        </div>    
    )
}

export default Home;