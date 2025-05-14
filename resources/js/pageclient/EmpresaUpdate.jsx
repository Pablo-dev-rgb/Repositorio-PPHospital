import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Config from "../Config";
import Select from "../components/Select";
import AuthUser from "../pageauth/AuthUser";

const EmpresaUpdate = () =>{
    const navigate = useNavigate()
    const {getToken} = AuthUser()
    const {id} = useParams()
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orden, setOrden] = useState(0)   
    const [descripcion, setDescripcion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [website, setWebsite] = useState("")
    const [facebook, setFacebook] = useState("")
    const [youtube, setYoutube] = useState("")
    const [tiktok, setTiktok] = useState("")
    const [urlfoto, setUrlfoto] = useState("")
    const [categoria_id, setCategoria_id] = useState()
    const [file, setFile] = useState("")

    const handleInputChange = async(e)=>{
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e)=>{
            setFile(e.target.result)
        }
    }

    useEffect(()=>{
        const getEmpresa =  async()=>{
            const token = getToken()
            Config.getEmpresaByIdClient(token, id)
            .then(({data})=>{
                //console.log(data)
                setNombre(data.nombre)
                setEmail(data.email)
                setDescripcion(data.descripcion)
                setOrden(data.orden)
                setTelefono(data.telefono)
                setDireccion(data.direccion)
                setWebsite(data.website)
                setFacebook(data.facebook)
                setYoutube(data.youtube)
                setTiktok(data.tiktok)
                setUrlfoto(data.urlfoto)
                setCategoria_id(data.categoria_id)
            })
        };
        getEmpresa();
    },[])

    const getCategoriaId = (v)=>{ setCategoria_id(v) }
        
    const submitUpdate = async (e) => {
        e.preventDefault();
        const token = getToken();
        await Config.getEmpresaUpdateClient(token, {nombre,email,telefono,direccion,website,facebook,youtube,tiktok,descripcion,urlfoto,orden,categoria_id,file}, id);
        navigate("/client/empresa");
    };

    return(
        <div className="row justify-content-center">
            <div className="col-sm-9">
                <div className="card mt-5 mb-5">
                    <div className="card-header">Editar Empresa</div>
                        <div className="card-body">
                            <form onSubmit={submitUpdate}>

                                <div className="form-group row">
                                    <div className="col-sm-6">
                                        <label>Nombre</label>
                                        <input type="text" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                                    </div>
                                    <div className="col-sm-3">
                                        <label>Email</label>
                                        <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                    </div>
                                    <div className="col-sm-3">
                                        <label>Telefono</label>
                                        <input type="tel" className="form-control" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
                                    </div>
                                </div>

                                <div className="form-group row mt-3">
                                    <div className="col-sm-6">
                                        <label>Dirección</label>
                                        <input type="text" className="form-control" value={direccion} onChange={(e)=>setDireccion(e.target.value)} />
                                    </div>
                                    <div className="col-sm-3">
                                        <label>Orden</label>
                                        <input type="number" className="form-control" value={orden} onChange={(e)=>setOrden(e.target.value)} />
                                    </div>
                                    <div className="col-sm-3">
                                        <label>Categoria</label>
                                        <Select selec={categoria_id} selected={getCategoriaId}/>
                                    </div>
                                </div>

                                <div className="form-group row mt-3">
                                    <div className="col-sm-3">
                                        <label>Website</label>
                                        <input type="url" className="form-control" value={website||""} onChange={(e)=>setWebsite(e.target.value)} />
                                    </div>
                                    <div className="col-sm-3">
                                        <label>Facebook</label>
                                        <input type="url" className="form-control" value={facebook||""} onChange={(e)=>setFacebook(e.target.value)} />
                                    </div>
                                    <div className="col-sm-3">
                                        <label>Youtube</label>
                                        <input type="url" className="form-control" value={youtube||""} onChange={(e)=>setYoutube(e.target.value)} />
                                    </div>
                                    <div className="col-sm-3">
                                        <label>Tiktok</label>
                                        <input type="url" className="form-control" value={tiktok||""} onChange={(e)=>setTiktok(e.target.value)} />
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <label>Descripcion</label>
                                    <textarea className="form-control" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} />
                                </div>
                                <div className="mt-3">
                                    <label>Imagen</label>
                                    <img src={`/img/empresa/${urlfoto}`} loading="lazy" width={200} height={200} className="img-fluid img-thumbnail" />
                                    <input type="file" className="form-control" onChange={(e)=>handleInputChange(e)} />
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
    )
}

export default EmpresaUpdate;