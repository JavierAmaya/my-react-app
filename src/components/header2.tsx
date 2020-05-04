import React from "react";

const Header2: React.FC = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <img src="../img/ferreteria logo.jpg" alt=""/>
                        <a className="navbar-brand anchor_navbar">
                            <h2>Aqui voy a mostrar el nombre de un supplier</h2>
                            Ferreteria La Union
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="other_websites/Inicio/index.html">Inventario</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cliente</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>  
);

export default Header2;