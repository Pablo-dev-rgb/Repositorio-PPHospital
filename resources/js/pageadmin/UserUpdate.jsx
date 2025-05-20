import React, { useEffect, useState } from "react";
import AuthUser from "../pageauth/AuthUser";
import { Link, useNavigate, useParams } from "react-router-dom";
import Config from "../Config";
import Sidebar from "./Sidebar";

const UserUpdate = () =>{
    const navigate = useNavigate()
    const {getToken} = AuthUser();
    const {id} = useParams();
    const [name, setName] = useState('');
    const [aprobado, setAprobado] = useState(false);

    useEffect(()=>{
        const token = getToken();

        const getUserById = async ()=>{
            Config.getUserById(token, id)
            .then(({data})=>{
                setName(data.name)
                setAprobado(data.aprobado)
            })
        };
        getUserById();
    },[])

    const submitUpdate = async (ev)=>{
        ev.preventDefault()
        const token = getToken()
        await Config.getUserUpdate(token, {aprobado}, id)
        navigate("/admin/user")
    }

    return(
        <div className="container bg-light">
            <div className="row justify-content-center mt-5 mb-5">
                <Sidebar/>
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-header">EDITAR USUARIO</div>
                        <div className="card-body">
                            <form onSubmit={submitUpdate}>
                                <div className="col-sm-12">
                                    <label htmlFor="name">Nombre:</label>
                                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" checked={aprobado} onChange={(e)=>setAprobado(!aprobado)} type="checkbox" role="switch" id="aprobado" />
                                        <label className="form-check-label" htmlFor="aprobado">Aprobado</label>
                                    </div>
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary">Volver</Link>
                                    <button type="submit" className="btn btn-primary">Actualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default UserUpdate;