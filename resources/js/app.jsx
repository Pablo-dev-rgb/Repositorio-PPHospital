import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
//layouts
import LayoutPublic from "./Layouts/LayoutPublic";
import LayoutAdmin from "./Layouts/LayoutAdmin";
import LayoutClient from "./Layouts/LayoutClient";
//public
import PageHome from "./pagePublic/PageHome";
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//auth
import Login from "./pageauth/Login";
import Register from "./pageauth/Register";
//rolClient
import PanelClient from "./pageclient/PanelClient";
import EmpresaAllClient from "./pageclient/EmpresaAll";
//rolAdmin
import PanelAdmin from "./pageadmin/PanelAdmin";
import UserAll from "./pageadmin/UserAll";
import UserUpdate from "./pageadmin/UserUpdate";
import CategoriaAll from "./pageadmin/CategoriaAll";
import CategoriaStore from "./pageadmin/CategoriaStore";
import CategoriaUpdate from "./pageadmin/CategoriaUpdate";
import EmpresaAll from "./pageadmin/EmpresaAll";
import EmpresaUpdate from "./pageadmin/EmpresaUpdate";


const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LayoutPublic/>}>
                    <Route index element={<PageHome/>}/>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                </Route>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/admin" element={<LayoutAdmin/>}>
                    <Route index element={<PanelAdmin/>} />
                    <Route path="user" element={<UserAll/>} />
                    <Route path="user/edit/:id" element={<UserUpdate/>} />

                    <Route path="categoria" element={<CategoriaAll/>} />
                    <Route path="categoria/create" element={<CategoriaStore/>} />
                    <Route path="categoria/edit/:id" element={<CategoriaUpdate/>} />
                    
                    <Route path="empresa" element={<EmpresaAll/>} />
                    <Route path="empresa/edit/:id" element={<EmpresaUpdate/>} />

                </Route>
                <Route path="/client" element={<LayoutClient/>}>
                    <Route index element={<PanelClient/>} />
                    <Route path="empresa" element={<EmpresaAllClient />} />
                </Route>
            </Route>
            </Routes>
        </Router>
    )
}

export default App

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
            <App/>
    )
}