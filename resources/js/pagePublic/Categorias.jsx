import React, { useEffect, useState } from "react";
import Config from "../Config";

const Categorias = () =>{
    const [categorias, setCategorias] = useState([])

    useEffect((e)=>{
        getCategorias()
    },[])

    const getCategorias = async()=>{
        const response = await Config.CategoriaAll()
        setCategorias(response.data)
    }
    
    return(
        <div>Categorias</div>
    )
}

export default Categorias;