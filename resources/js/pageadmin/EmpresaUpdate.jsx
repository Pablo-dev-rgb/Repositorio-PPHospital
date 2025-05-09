import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser";
import Config from "../Config";
import Sidebar from "./Sidebar";

const EmpresaUpdate = () =>{
    const navigate = useNavigate()
    const {getToken} = AuthUser();
    const {id} = useParams();
    const [nombre, setNombre] = useState("")
    const [orden, setOrden] = useState("")
    const [publicado, setPublicado] = useState(false)

    useEffect(()=>{
        const token = getToken();

        const _getEmpresaUpdate = async ()=>{
            Config.getEmpresaById(token, id)
            .then(({data})=>{
                setNombre(data.nombre)
                setOrden(data.orden)
                setPublicado(data.publicado)
            })
        };
        _getEmpresaUpdate()
    },[])

    const submitUpdate = async (ev)=>{
        ev.preventDefault()
        const token = getToken()
        await Config.getEmpresaUpdate(token, {nombre,orden,publicado}, id)
        navigate("/admin/empresa")
    }
    return(
        <div className="container bg-light">
            <div className="row">
                <Sidebar/>
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitUpdate}>
                                <div className="form-group row">
                                    <div className="mt-3">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" checked={publicado} onChange={(e)=>setPublicado(!publicado)} type="checkbox" role="switch" id="publicado" />
                                            <label className="form-check-label" htmlFor="publicado">Publicado</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <label>Nombre</label>
                                        <input type="text" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Orden</label>
                                        <input type="number" className="form-control" value={orden} onChange={(e)=>setOrden(e.target.value)} />
                                    </div>
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary">Volver</Link>
                                    <button type="submit" className="btn btn-primary">Actualizar empresa</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpresaUpdate;