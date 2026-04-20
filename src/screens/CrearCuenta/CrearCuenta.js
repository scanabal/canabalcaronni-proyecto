import React, {Component} from "react";

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
    let existeUser= users.filter(user => user.email === this.state.email) //puedo poner filter?

    if(existeUser) { this.setState({error:"Este mail ya esta en uso"}) }
    else if (this.state.password.length <6) {
      this.setState({error:"Tu password debe tener al menos 6 caracteres"})
    }
      else { (users.push)({
      email:this.state.email,
      password: this.state.password
    })
      }
    
    localStorage.setItem("savedUsers", JSON.stringify(users)),
    // Esto me deja dirigir al login
    this.props.history.push("/login")
  

     }
     
    controlarCambios(e){
        this.setState({email: e.target.value})

    }
    controlarCambiosPassword(e){
        this.setState({password: e.target.value})

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
              <input type="password" name="password" value={this.state.password} onChange={(evento)=> this.controlarCambiosPassword(evento)}/>
              <button type="submit">Registrarme</button>
           
               
                </form>
                
                {this.state.error !== "" && <p>{this.state.error}</p>}
                </div>
            </React.Fragment>
            

          
        
        );
    }

}

export default CrearCuenta
    