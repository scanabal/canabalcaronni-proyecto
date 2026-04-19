import { Link } from "react-router-dom"
// import Detalle from "../Detalle/Detalle"
// import Home from "../../screens/Home/Home"
// import DetalleTv from "../DetalleTv/DetalleTv"
// import CrearCuenta from "../../screens/CrearCuenta/CrearCuenta"

function Nav() {
    const hayCookie = (como verifico si hay una cookie?)
return(
<nav>
        <ul className="nav nav-tabs my-4">
                <li class="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                hayCookie ? (
                    <li>
                  <Link to="Favoritos" className="nav-link"></Link>
                </li>
                ) : (
                    <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/CrearCuenta"className="nav-link">Crear Cuenta</Link>
                    </li>
                )
            
        </ul>
        </nav>
        )
    }
export default Nav