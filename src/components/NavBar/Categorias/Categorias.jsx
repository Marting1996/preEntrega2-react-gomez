import { Link } from "react-router-dom";


const Marcas = () => {
    return (
        <div>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu">
                  <Link className="nav-link" to={"/category/placas-de-video"}>
                  <li><a className="dropdown-item" href="/#">Placas de Video</a></li>
                  </Link>
                  <Link className="nav-link" to={"/category/monitores"}>
                  <li><a className="dropdown-item" href="/#">Monitores</a></li>
                  </Link>
                  <Link className="nav-link" to={"/category/motherboards"}>
                  <li><a className="dropdown-item" href="/#">Placas Madres</a></li>
                  </Link>
                  <Link className="nav-link" to={"/category/procesadores"}>
                  <li><a className="dropdown-item" href="/#">Procesador</a></li>
                  </Link>
                  <Link className="nav-link" to={"/category/gabinetes"}>
                  <li><a className="dropdown-item" href="/#">Gabinete</a></li>
                  </Link>
                </ul>
              </li>
        </div>
    );
}

export default Marcas;
