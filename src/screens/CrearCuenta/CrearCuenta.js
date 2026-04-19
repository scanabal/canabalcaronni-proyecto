import React, {Component} from "react";
import { withRouter, Link } from "react-router-dom";

class CrearCuenta extends Component {
    constructor(props){
        super(props);
        this.state = { 
          email: "",
          password: "",  
          error: ""
        };

    }
     evitarSubmit(e){
        e.preventDefault();
    
    let users = JSON.parse(localStorage.getItem("savedUsers"))
    let existe = users.find(user => user.email === this.state.email);

    existe
    ? this.setState({error:"Este mail ya esta en uso"})
    :this.state.password.length <6
      ? this.setState({error:"Tu password debe tener al menos 6 caracteres"})
      : (users.push({
      email:this.state.email,
      password: this.state.password
    }),
       localStorage.setItem("savedUsers", JSON.stringify(users)),
    // Esto me deja dirigir al login
    this.props.history.push("/login")
  
); 
     }
     
    controlarCambios(e){
        this.setState({
            [e.target.name]: e.target.value});
    }

    render(){
        return(
            <React.Fragment>
              <div className="form-input">
                <h2>Crear Cuenta</h2>
                <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.email} onChange={(evento)=> this.controlarCambios(evento)}/>
                
            
              <label>Password:</label>
              <input type="password" name="password" value={this.state.password} onChange={(evento)=> this.controlarCambios(evento)}/>
              <button type="submit">Registrarme</button>
           
               
                </form>
                
                {this.state.error !== "" && <p>{this.state.error}</p>}
                </div>
            </React.Fragment>
            

          
        
        );
    }

}

export default CrearCuenta
    