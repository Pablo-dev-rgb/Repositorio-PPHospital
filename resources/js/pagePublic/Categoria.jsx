import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Config from "../Config";
import Modal from "../components/Modal";

const Categoria = () =>{
    const {slug} = useParams()
    const [modal, setModal] = useState(false)
    const [datamodal, setDatamodal] = useState([])
    const [categoria, setCategoria] = useState([])
    const [empresas, setEmpresas] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const getCategoria = async ()=>{
            await Config.CategoriaBySlug(slug).then(({data})=>{
                if(data!==null){
                    setCategoria(data.categoria)
                    if(data.empresas.length > 0){
                        setEmpresas(data.empresas)
                    }
                }else{
                    navigate("/")
                }
            })
        }
        getCategoria();
    },[slug])

    const showModal = (e,empresa)=>{
        e.preventDefault()
        setModal(true);
        setDatamodal(empresa);
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    <div className="card mt-5 mb-5">
                        <div className="card-body">
                            <h1 className="text-center fw-bolder">Empresa de {categoria.nombre}</h1>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                {
                                    empresas.map((empresa)=>{
                                        return(
                                            <div className="mt-3" key={empresa.id}>
                                                <div className="card-body">
                                                    <h3 className="fw-bolder">
                                                        <a href="#" onClick={(e)=>showModal(e,empresa)}>{empresa.nombre}</a>
                                                    </h3>
                                                    <p>{empresa.descripcion}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                {modal && <Modal datamodal={datamodal} close={setModal} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categoria;