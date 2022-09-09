import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/biografia">Acerca de m&iacute;</Link></li>
                    <li><Link to="/disenios">Dise&ntilde;os</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;