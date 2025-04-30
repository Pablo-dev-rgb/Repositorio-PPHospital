import React from "react";
import AuthUser from "../pageauth/AuthUser";
import Config from "../Config";

const Navbar = () =>{

    const {getRol, getLogout, getToken} = AuthUser()

    const logoutUser = () =>{
      const token = sessionStorage.getItem('XSRF-TOKEN'); // Obtén el valor de la cookie XSRF-TOKEN

      Config.getLogout({
          headers: {
              'X-XSRF-TOKEN': token ? JSON.parse(token) : null, // Inclúyelo en los encabezados
          }
      })
      .then(response=>{
          console.log(response)
          getLogout();
      })
      .catch(error => {
          console.error("Error al hacer logout:", error);
      });
  }

    const renderLinks = () =>{
        if(getToken()){
            return(
                <>
                <li className="nav-item">
                    <a className="nav-link" href={`/${getRol()}`} >Administracion</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={logoutUser}>Logout</a>
                </li>
                </>
            )
        }else{
            return(
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
            )
        }
    }
    
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Hospital</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/categorias">Categorias</a>
        </li>
        {renderLinks()}
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;