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
        let valor = e.target.value;

        if(event.target.name === "email"){
            this.setState({ email: valor });
        } else if(event.target.name === "password"){
            this.setState({ password: valor });
        }
    }

    evitarSubmit(e){
        e.preventDefault();}

    render(){
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={(e) => this.evitarSubmit(e)}>
                    <input type="email" value={this.state.value} onChange={(e) => this.controlarCambios(e)} placeholder="Email"/>
                    <input type="password" name="password" value={this.state.password} onChange={(e) => this.controlarCambios(e)} placeholder="Password"/>
                    <button type="submit">Ingresar</button>
                </form>

            </div>
        )
    }


}

export default Login;