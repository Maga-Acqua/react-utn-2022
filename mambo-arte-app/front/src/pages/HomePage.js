import React from 'react';
import '../styles/components/pages/HomePage.css';

const HomePage = props => {
    return (
        <main className="holder">
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvenid@s</h2>
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
                </section>
                <div className="img-home">
                    <img src="images/img_set.jpg" alt="Set de Mate Floral" />
                </div>
            </div>
            <section className="cita-container">
                <span className="cita">Sueño con pintar y luego pinto mis sueños</span>
                <span className="autor">Vincent Van Gogh</span>
            </section>
        </main>
    );
}

export default HomePage;