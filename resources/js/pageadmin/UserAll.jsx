import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Config from "../Config";
import AuthUser from "../pageauth/AuthUser";

const UserAll = () =>{
    const {getToken} = AuthUser()
    const [users, setUsers] = useState();

    useEffect(()=>{
        getUserAll();
    },[])
    
    const getUserAll = async ()=>{
        const token = getToken()

        if(token){
        const response = await Config.getUserAll(token)
        //console.log(response.data)
        setUsers(response.data)
        }
    }


    return(
        <div className="container bg-light">
            <div className="row">
                <Sidebar/>
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th><th>NOMBRE</th><th>ACCION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { !users ? (
                                        <tr>
                                        <td>...loading</td>
                                        </tr>
                                    ) : (
                                        users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td></td>
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

export default UserAll;