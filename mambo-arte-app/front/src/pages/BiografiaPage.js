import React from 'react';
import '../styles/components/pages/BiografiaPage.css';

const BiografiaPage = props => {
    return (
        <main className="holder">
            <div className="columnas">
                <div className="biografia">
                    <h2>Presentacion</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                <div className="img-biografia">
                    <img src="https://via.placeholder.com/520x450" alt="Imagen Persona" />
                </div>
            </div>
            <section className="section-redes">
                <div className="section-col">
                    <img src="images/flor_amarilla.jpg" alt="Flor amarilla" />
                </div>
                <div className="section-col">
                    <p>Te invito a seguirme en mis redes</p>
                    <ul>
                        <li><img src="images/instagram-logo.png" alt="Logo instagram" /><a href="">@mamboarte</a></li>
                        <li><img src="images/facebook-logo.png" alt="Logo facebook" /><a href="">Mambo Arte</a></li>
                        <li><img src="images/linkedin-logo.png" alt="Logo linkedin" /><a href="">/MamboArte </a></li>
                        <li><img src="images/behance-logo.png" alt="Logo linkedin" /><a href="">/MamboArte </a></li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default BiografiaPage;