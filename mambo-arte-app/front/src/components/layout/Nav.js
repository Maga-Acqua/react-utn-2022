import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/layout.css';

const Nav = props => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/home" className={({isActive}) => isActive ? "activo": undefined }>Home</NavLink></li>
                    <li><NavLink to="/biografia" className={({isActive}) => isActive ? "activo": undefined }>Acerca de m&iacute;</NavLink></li>
                    <li><NavLink to="/disenios" className={({isActive}) => isActive ? "activo": undefined }>Dise&ntilde;os</NavLink></li>
                    <li><NavLink to="/productos" className={({isActive}) => isActive ? "activo": undefined }>Productos</NavLink></li>
                    <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activo": undefined }>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}


export default Nav;