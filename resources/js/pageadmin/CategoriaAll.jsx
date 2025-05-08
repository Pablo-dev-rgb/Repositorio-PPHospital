import React, { useEffect, useState } from "react";
import AuthUser from "../pageauth/AuthUser";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Config from "../Config";

const CategoriaAll = () =>{
    const {getToken} = AuthUser()
    const [categorias, setCategirias] = useState([]);

    useEffect(()=>{
        _getCategoriaAll();
    },[])
    
    const _getCategoriaAll = async ()=>{
        const token = getToken()
        if(token){
        const response = await Config.getCategoriaAll(token)
        //console.log(response.data)
        setCategirias(response.data)
        }
    }

    const _deleteCategoriaById = async(id)=>{
        const token = getToken()

        const isDelete = window.confirm("¿Desea borrar la categoria?")
        if(isDelete){
            await Config.getCategoriaDeleteById(token, id)
            _getCategoriaAll()
        }
    }


    return(
        <div className="container bg-light">
        <div className="row">
            <Sidebar/>
            <div className="col-sm-9 mt-3 mb-3">
                <div className="card">
                    <div className="card-body">
                        <Link to={'/admin/categoria/create'} className="btn btn-primary">Crear categoria</Link>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th><th>NOMBRE</th><th>ORDEN</th><th>ACCION</th>
                                </tr>
                            </thead>
                            <tbody>
                                { !categorias ? (
                                    <tr>
                                    <td>...loading</td>
                                    </tr>
                                ) : (
                                    categorias.map((categoria) => (
                                    <tr key={categoria.id}>
                                        <td>{categoria.id}</td>
                                        <td>{categoria.nombre}</td>
                                        <td>{categoria.orden}</td>
                                        <td>
                                            <Link to={`edit/${categoria.id}`} className="btn btn-primary">Editar</Link>
                                            <button className="btn btn-primary" onClick={()=>_deleteCategoriaById(categoria.id)} >Eliminar</button>
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

export default CategoriaAll;