import { Link } from "react-router-dom"
import React from "react"
import Cookies from "universal-cookie"
const cookies= new Cookies()

function Nav() {
    const hayCookie = cookies.get("auth-user")
return(
<nav>
        <ul className="nav nav-tabs my-4">
                <li class="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/EnCartel" className="nav-link">En Cartel</Link>
                </li>
                <li class="nav-item">
                  <Link to="/Populares" className="nav-link">Populares</Link>
                </li>
                {hayCookie ? (
                    <li>
                  <Link to="Favoritos" className="nav-link">Favoritos</Link>
                </li>
                ) : (
                  <React.Fragment>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                    </li>

                    <li className="nav-item">
                    <Link to="/CrearCuenta"className="nav-link">Crear Cuenta</Link>
                    </li>
                    </React.Fragment>
                )}
            
        </ul>
        </nav>
        )
    }
export default Nav