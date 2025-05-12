import React, { useEffect, useState } from "react";
import AuthUser from "../pageauth/AuthUser";
import Config from "../Config";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const EmpresaAll = () =>{
    const {getToken} = AuthUser()
    const [empresas, setEmpresas] = useState([]);

    useEffect(()=>{
        _getEmpresaAll();
    },[])
    
    const _getEmpresaAll = async ()=>{
        const token = getToken()
        if(token){
        const response = await Config.getEmpresaAllClient(token)
        //console.log(response.data)
        setEmpresas(response.data)
        }
    }
    return(
        <div className="container bg-light">
        <div className="row">
            <Sidebar/>
            <div className="col-sm-9 mt-3 mb-3">
                <div className="card">
                    <div className="card-body">
                        <Link to={'/client/empresa/create'} className="btn btn-primary">Crear empresa</Link>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th><th>NOMBRE</th><th>ORDEN</th><th>ACCION</th>
                                </tr>
                            </thead>
                            <tbody>
                                { !empresas ? (
                                    <tr>
                                    <td>...loading</td>
                                    </tr>
                                ) : (
                                    empresas.map((empresa) => (
                                    <tr key={empresa.id}>
                                        <td>{empresa.id}</td>
                                        <td>{empresa.nombre}</td>
                                        <td>{empresa.orden}</td>
                                        <td>
                                            <Link to={`/client/edit/${empresa.id}`} className="btn btn-primary">Editar</Link>
                                        </td>
                                    </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EmpresaAll;