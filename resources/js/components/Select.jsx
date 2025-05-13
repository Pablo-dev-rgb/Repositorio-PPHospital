import React, { useEffect, useState } from "react";
import AuthUser from "../pageauth/AuthUser";
import Config from "../Config";

const Select = ({data, selected}) =>{
    const [options, setOptions] = useState([])
    const {getToken} = AuthUser()

    useEffect(()=>{
        getOptions();
    },[])

    const getOptions = async()=>{
        const token = getToken()
        const response = await Config.getCategoriaAll(token);
        setOptions(response.data)
    }

    return(
        <select className="form-control" value={data} onChange={(e)=>{selected(e.target.value)}}>
            {
                options.map((option)=>{
                    return(
                        <option key={option.id} value={option.id}>{option.nombre}</option>
                    )
                })
            }
        </select>
    )
}

export default Select;