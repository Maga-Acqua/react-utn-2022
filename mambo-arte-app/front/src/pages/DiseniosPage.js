import React from 'react';
import '../styles/components/pages/DiseniosPage.css';

const DiseniosPage = props => {
    return (
        <main className="holder">
            <div className="disenios-container">
                <h2>Dise&ntilde;os propios y variados</h2>
                <div className="disenios">
                    <img src="images/mate_florceleste.jpg" alt="Fondo floral" />
                    <div className="desc-disenio">
                        <h3>Florales</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>
                </div>
                <div className="disenios">
                    <img src="images/cats_lila.jpg" alt="Fondo gatos" />
                    <div className="desc-disenio">
                        <h3>Gatitos</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>
                </div>
                <div className="disenios">
                    <img src="images/montanas.jpg" alt="Fondo montañas" />
                    <div className="desc-disenio">
                        <h3>Monta&ntilde;as</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DiseniosPage;