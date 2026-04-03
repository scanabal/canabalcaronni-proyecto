import React, { Component } from "react";

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
        let valor = event.target.value;

        if(event.target.name === "email"){
            this.setState({ email: valor });
        } else if(event.target.name === "password"){
            this.setState({ password: valor });
        }
    }

    evitarSubmit(e){
        e.preventDefault();
    
        let usuarios = JSON.parse(localStorage.getItem("usuariosGuardados")) || [];
        for(let i = 0; i<usuarios.length; i++){
            if( usuarios[i].email === this.state.email && usuarios[i].password === this.state.password)
            {this.props.history.push("/home");
                return;
            }
        }
        this.setState({ error: "Credenciales incorrectas" });
    }

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

export default Login;