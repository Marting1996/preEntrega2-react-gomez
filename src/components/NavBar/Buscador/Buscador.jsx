import React from 'react';

const Buscador = () => {
    return (
        <div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscador" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    );
}

export default Buscador;
