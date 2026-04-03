import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            valor: "",
        }
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
            <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input type="text" placeholder="Buscar..." onChange={(evento)=> this.controlarCambios(evento)} value={this.state.valor}/>
            </form>

        // 2 secciones

            //peliculas populares
            

            //peliculas en cartel

        
        )
    }

}
export default withRouter(Home)

