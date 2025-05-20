import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser";
import Config from "../Config";
import Sidebar from "./Sidebar";

const CategoriaUpdate = () =>{
    const navigate = useNavigate()
    const {getToken} = AuthUser();
    const {id} = useParams();
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState("")
    const [orden, setOrden] = useState("")
    const [menu, setMenu] = useState(false)
    const [urlfoto, setUrlfoto] = useState("foto.jpg")
    const [file, setFile] = useState("")

    const handleInputChange = async(e)=>{
        let files = e.target.files
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e)=>{
            setFile(e.target.result)
        }
    }

    useEffect(()=>{
        const token = getToken();

        const _getCategoriaUpdate = async ()=>{
            Config.getCategoriaById(token, id)
            .then(({data})=>{
                setNombre(data.nombre)
                setDescripcion(data.descripcion)
                setOrden(data.orden)
                setMenu(data.menu)
                setUrlfoto(data.urlfoto)
            })
        };
        _getCategoriaUpdate();
    },[])

    const submitUpdate = async (ev)=>{
        ev.preventDefault()
        const token = getToken()
        await Config.getCategoriaUpdate(token, {nombre,descripcion,orden,menu,file}, id)
        navigate("/admin/categoria")
    }
    
    return(
        <div className="container bg-light">
            <div className="row justify-content-center mt-5 mb-5">
                <Sidebar/>
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitUpdate}>
                                <div className="form-group row">
                                    <div className="mt-3">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" checked={menu} onChange={(e)=>setMenu(!menu)} type="checkbox" role="switch" id="menu" />
                                            <label className="form-check-label" htmlFor="menu">Portada</label>
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
                                <div className="mt-3">
                                    <label>Descripcion</label>
                                    <textarea className="form-control" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} />
                                </div>
                                <div className="mt-3">
                                    <label>Imagen</label>
                                    <img src={`/img/categoria/${urlfoto}`} loading="lazy" className="img-fluid img-thumbnail" />
                                    <input type="file" className="form-control" onChange={(e)=>handleInputChange(e)} />
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary">Volver</Link>
                                    <button type="submit" className="btn btn-primary">Actualizar categoría</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriaUpdate;