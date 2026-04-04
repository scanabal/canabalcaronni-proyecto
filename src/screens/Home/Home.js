import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import CardPeli from "../../components/CardPeli/CardPeli";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            valor: "",
            populares: [],
            cartel: []
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

    componentDidMount(){
        fetch("popularesAPI")
            .then(response => response.json())
            .then(data => this.setState({populares: data}))
            .catch(error => console.log(error))

        fetch("cartelAPI")
            .then(response => response.json())
            .then(data => this.setState({cartel: data}))
            .catch(error => console.log(error))
    }

    render(){
        return(
            <React.Fragment>

                <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
                    <input type="text" placeholder="Buscar..." onChange={(evento)=> this.controlarCambios(evento)} value={this.state.valor}/>
                </form>

        {/* 2 secciones*/}

            <h2>Peliculas mas populares</h2>
            <Link to="/populares">Ver todas</Link>

            {this.state.populares.map((peli, idx) => 
            <CardPeli 
                key={idx}
                pelicula={peli}/>)}            

            <h2>Peliculas en cartel</h2>
            <Link to="/cartel">Ver todas</Link>

            {this.state.cartel.map((peli, idx) => 
            <CardPeli 
                key={idx}
                pelicula={peli}/>)}

        </React.Fragment>
        )
    }

}
export default withRouter(Home)

