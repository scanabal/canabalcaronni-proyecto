import { Link } from "react-router-dom"

function Nav() {
return(
<nav>
        <ul className="nav nav-tabs my-4">
                <li class="nav-item">
                    <Link className="nav-link" to="index.html">Home</Link>
                </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="">Login</Link></li>
            <li><Link to="">Crear Cuenta</Link></li>
            <li><Link to="">Favoritos</Link></li>

        </ul>
        </nav>
        )
    }
export default Nav