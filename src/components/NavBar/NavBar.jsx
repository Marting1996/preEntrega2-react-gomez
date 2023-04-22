import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Promos from './Promos/Promos';
import Categorias from './Categorias/Categorias';
import Buscador from './Buscador/Buscador';

const NavBar = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">
                            <img src="https://external-preview.redd.it/0lYLIHfqjUrYhqdizn9rYImMsmj4ydvn0PymDfFRdso.jpg?auto=webp&s=b367c93b16ab5e049f65d42daaa71595c0aa7333" alt="Logo" width="40" height="34" className="d-inline-block align-text-top" />
                            
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/#"><b>Inicio</b></a>
                                </li>
                                <Promos />
                                <Categorias />
                            </ul>
                            <Buscador />
                            <CartWidget cantCarrito={1} />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;
