import React from 'react';

const ContactoPage = props => {
    return (
        <main className="holder contacto-container">
            <div className="contacto">
                <h2>Contacto</h2>
                <form action="" method="post" className="formulario">
                    <p>
                        <label htmlFor="nombre" aria-required="true">Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label htmlFor="email" aria-required="true">Email</label>
                        <input type="email" name="email" />
                    </p>
                    <p>
                        <label htmlFor="tel">Tel&eacute;fono</label>
                        <input type="tel" name="tel" />
                    </p>
                    <p>
                        <label htmlFor="msj">Mensaje</label>
                        <textarea name="msj"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <section className="section-redes-contacto">
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

export default ContactoPage;