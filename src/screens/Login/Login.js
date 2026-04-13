import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies()

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    controlarCambios(event){
        event.target.name === "email"
        ? this.setState({email: event.target.value})
        : this.setState({ password: event.target.value});}

    evitarSubmit(e){
        e.preventDefault();
    
        let usuarios = JSON.parse(localStorage.getItem("savedUsers")) || [];
        
        let usuarioEncontrado = usuarios.find(usuario => 
            usuario.email === this.state.email && usuario.password === this.state.password)


// tal que usuario exista y la contraseña coincida, crear una cookie de sesión

        usuarioEncontrado
            ? //(cookies.set("session", this.state.email, {path: "/"})
             this.props.history.push("/")
            : this.setState({error: "Credenciales incorrectas"})}

          

    render(){
        let mensajeError = "";
        if (this.state.error !== ""){
            mensajeError = <p>{this.state.error}</p>;
        }

        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={(e) => this.evitarSubmit(e)}>
                    <input type="email" name="email" value={this.state.email} onChange={(e) => this.controlarCambios(e)} placeholder="Email"/>
                    <input type="password" name="password" value={this.state.password} onChange={(e) => this.controlarCambios(e)} placeholder="Password"/>
                    <button type="submit">Ingresar</button>
                </form>
                {mensajeError}

            </div>
        )
    }
}

export default withRouter(Login);