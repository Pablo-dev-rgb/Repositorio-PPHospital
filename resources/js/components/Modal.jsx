import React from "react";
import "./Modal.css";

const Modal = ({datamodal, close}) =>{
    const openClick = (url)=>{
        window.open(url,"_blanck","noreferrer")
    }

    return(
        <div className="modal_bg">
            <div className="modal_content">
                <div className="modal_body">
                    <img src={"/img/empresa/" +datamodal.urlfoto} width={150} height={150} className="mx-auto d-block rounded-pill p-2 shadow" />
                    <h2 className="text-center">{datamodal.nombre}</h2>
                    <p>{datamodal.descripcion}</p>
                    <ul className="list-group">
                        <li className="list-group-item">Telefono: <b>{datamodal.telefono}</b></li>
                        <li className="list-group-item">E-mail: <b>{datamodal.email}</b></li>
                        <li className="list-group-item">Direcciòn: <b>{datamodal.direccion}</b></li>
                    </ul>
                    <div className="container text-center mt-3">
                        <div className="btn-group">
                            {datamodal.facebook && <button className="btn btn-secondary btn-sm" onClick={()=>openClick(datamodal.facebook)}>Facebook</button>}
                            {datamodal.tiktok && <button className="btn btn-secondary btn-sm" onClick={()=>openClick(datamodal.tiktok)}>Tiktok</button>}
                            {datamodal.youtube && <button className="btn btn-secondary btn-sm" onClick={()=>openClick(datamodal.youtube)}>Youtube</button>}
                            {datamodal.website && <button className="btn btn-secondary btn-sm" onClick={()=>openClick(datamodal.website)}>Website</button>}

                        </div>
                    </div>
                </div>
                <div className="modal_footer text-center">
                    <button onClick={()=>close(false)} className="btn btn-secondary mt-3">Regresar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;