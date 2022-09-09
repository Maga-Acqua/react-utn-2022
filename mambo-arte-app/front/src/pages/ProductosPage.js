import React from 'react';

const ProductosPage = props => {
    return (
        <main className="holder">
            <div className="productos-container">
                <div className="producto">
                    <img src="images/uno.jpg" alt="Maceta floral" />
                    <h4>Maceta Nro 10</h4>
                    <p>De terracota</p>
                    <p>Pintada a mano y barnizada</p>
                </div>
                <div className="producto">
                    <img src="images/dos.jpg" alt="Maceta gatitos" />
                    <h4>Maceta Nro 14</h4>
                    <p>De terracota</p>
                    <p>Pintada a mano y barnizada</p>
                </div>
                <div className="producto">
                    <img src="images/tres.jpg" alt="Maceta gatitos" />
                    <h4>Maceta Nro 12</h4>
                    <p>De terracota</p>
                    <p>Pintada a mano y barnizada</p>
                </div>
                <div className="producto">
                    <img src="images/cuatro.jpg" alt="Maceta gatitos" />
                    <h4>Mate con base</h4>
                    <p>De algarrobo</p>
                    <p>Pintado a mano y barnizado</p>
                </div>
            </div>
        </main>
    );
}

export default ProductosPage;