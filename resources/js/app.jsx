import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

import LayoutPublic from "./Layouts/LayoutPublic";
import Login from "./pageauth/Login";
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import LayoutAdmin from "./Layouts/LayoutAdmin";
import LayoutClient from "./Layouts/LayoutClient";

import PageHome from "./pagePublic/PageHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LayoutPublic/>}>
                    <Route index element={<PageHome/>}/>
                    <Route path="/login" element={<Login/>} />
                </Route>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/admin" element={<LayoutAdmin/>}>
                    <Route index element={<PageHome/>} />
                </Route>
                <Route path="/client" element={<LayoutClient/>}>
                    <Route index element={<PageHome/>} />
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
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}