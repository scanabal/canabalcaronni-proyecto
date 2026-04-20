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
    
        let usuariosStorage = localStorage.getItem("savedUsers");

        if (usuariosStorage === null){
            this.setState({error: "Las credenciales ingresadas son inválidas"})}
        else {
            let usuarios = JSON.parse(usuariosStorage);

            let usersFiltrado = usuarios.filter(
                usuario => usuario.email === this.state.email
            );

            if (usersFiltrado.length === 0){
                this.setState({error: "El usuario ingresado no existe"})}
            else if (usersFiltrado[0].password !== this.state.password){
                this.setState({error: "Las credenciales ingresadas son inválidas"})}
            else {
                cookies.set('auth-user', this.state.email);
                this.props.history.push("/");}
            }}
          

    render(){
        let mensajeError = "";
        if (this.state.error !== ""){
            mensajeError = <p>{this.state.error}</p>;
        }

        return(
            <div className="container">
                <div>
                <h2>Login</h2>
                <form className="form" onSubmit={(e) => this.evitarSubmit(e)}>
                    <input type="email" name="email" value={this.state.email} onChange={(e) => this.controlarCambios(e)} placeholder="Email"/>
                    <input type="password" name="password" value={this.state.password} onChange={(e) => this.controlarCambios(e)} placeholder="Password"/>
                    <button type="submit">Ingresar</button>
                </form>
                {mensajeError}
                </div>
            </div>
        )
    }
}

export default withRouter(Login);