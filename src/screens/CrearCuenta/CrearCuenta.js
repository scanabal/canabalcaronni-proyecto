import React, {Component} from "react";
import { withRouter, Link } from "react-router-dom";

class CrearCuenta extends Component {
    constructor(props){
        super(props);
        this.state = { 
          email: "",
          password: "",  
        };

    }
     evitarSubmit(e){
        e.preventDefault();
        this.props.history.push("/search/"+this.state.valor)
    }

    controlarCambios(e){
        this.setState({
            valor: e.target.value});
    }

    render(){
        return(
            <React.Fragment>
              <div className="form-input">
                <h2>Crear Cuenta</h2>
                <form onSubmit={(evento)=> this.evitarSubmit(evento)}/>
                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.email} onChange={(evento)=> this.controlarCambios(evento)}/>
                
              </div>
           
            <div className="form-input">
              <label>Password:</label>
              <input type="password" name="password" value={this.state.password} onChange={(evento)=> this.controlarCambios(evento)}/>
        
        
            </div>
            <button type="submit">Registrarme</button>
            
            </React.Fragment>
            

          
        
        );
    }

}

export default CrearCuenta
    