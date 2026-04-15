import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies()

class MiPerfil extends Component{
    
    logout(e){
        e.preventDefault();

        cookies.remove('auth-user');
        this.props.history.push("/login");
    }

    render(){
    return(
        <div>
            <h2>Mi Perfil</h2>
            <button onClick={(e) => this.logout(e)}>
                Cerrar sesion
            </button>
        </div>
    )}
}

export default withRouter(MiPerfil);