import React, { useEffect, useState } from "react";
import Config from "../Config";

const Home = () =>{
    const [empresas, setEmpresas] = useState([])
    const [modal, setModal] = useState(false)
    const [datamodal, setDatamodal] = useState([])
    
    useEffect(()=>{
        getEmpresas()
    },[])
    
    const getEmpresas= async()=>{
        const response = await Config.getEmpresas(5)
        //console.log(response.data)
        setEmpresas(response.data)
    }

    const search = async (e)=>{
        const response = await Config.searchEmpresas({text:e})
        setEmpresas(response.data)
    }

    const showModal = (empresa)=>{
        setModal(true);
        setDatamodal(empresa);
    }

    return(
        <div className="container pt-5 pb-5">
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    <h1 className="text-center fw-bolder">Directorio de Empresas</h1>
                    <div className="card mt-3 mb-3">

                        <div className="card-body">
                            <input type="search" placeholder="Buscador" onChange={(e)=>search(e.target.value)} className="form-control" />
                        </div>

                    </div>
                        <div className="card">
                            <div className="card-body">
                                {
                                    empresas.map((empresa)=>{
                                        return(
                                            <div className="mt-3" key={empresa.id}>
                                                <div className="card-body">
                                                    <h3 className="fw-bolder">
                                                        <a href="#" onClick={(e)=>showModal(empresa)}>{empresa.nombre}</a>
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
    )
}

export default Home;