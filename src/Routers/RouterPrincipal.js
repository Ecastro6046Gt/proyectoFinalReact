import React from "react";
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Inicio } from "../componentes/inicio";
import { Articulos } from "../componentes/Articulo";
import { Contactos } from "../componentes/Contacto";
import { Personas } from "../componentes/Personlas";

export const RouterPrincipal =() => {
    return(
        <BrowserRouter>
        <h1>Cabeceras</h1>
        <hr></hr>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" >Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/Articulos" >Articulos</NavLink>
                </li>
                <li>
                    <NavLink to="/Contactos" >Contactos</NavLink>
                </li>
            </ul>
        </nav>
        <hr></hr>
        <section>
            <Routes>
                <Route path="/" element={<Inicio></Inicio>}></Route>
                <Route path="/articulos" element={<Articulos></Articulos>}></Route>

                <Route path="/contactos" element={<Contactos></Contactos>}></Route>

            </Routes>
        </section>
        </BrowserRouter>
    )
}