import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import CardPeli from "../../components/CardPeli/CardPeli";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            valor: "",
            populares: [],
            cartel: [],
            tipo: "",
            haySesion: false          
        }
    }

    tipoSerie(){
        this.setState ({tipo: "tv"})
    }

    tipoPelicula(){
        this.setState ({tipo: "movie"})
    }

    controlarCambios(e){
        this.setState({
            valor: e.target.value});
    }

    evitarSubmit(e){
        e.preventDefault();

        if(this.state.valor !== "" && this.state.tipo !== ""){
            this.props.history.push("/search/" + this.state.tipo + "/" + this.state.valor)
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=57f7a2a82d57f08ae3dba76c4340b8c0")
            .then(response => response.json())
            .then(data => this.setState({populares: data.results}))
            .catch(error => console.log(error))

        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=57f7a2a82d57f08ae3dba76c4340b8c0")
            .then(response => response.json())
            .then(data => this.setState({cartel: data.results}))
            .catch(error => console.log(error))

            if(cookies.get('auth-user')){
                this.setState({haySesion: true})
        }
    }

    render(){
        return(
            <React.Fragment>

                <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
                    <input type="text" placeholder="Buscar..." onChange={(evento)=> this.controlarCambios(evento)} value={this.state.valor}/>
                    {/* <button type= "button" onClick={()=> this.tipoPelicula()}>Buscar peliculas</button> 
                    <button type= "button" onClick={()=> this.tipoSerie()}>Buscar series</button>  */}
                </form>

            <h2>Peliculas mas populares</h2>
            <Link to="/Populares">Ver todas</Link>

            <div className="row cards">
            
            {this.state.populares
                .filter((peli, idx) => idx < 4)
                .map((peli) => 
            <CardPeli 
                key={peli.id}
                pelicula={peli}
                haySesion={this.state.haySesion}/>)} 
            </div>           
                        
 
            <h2>Peliculas en cartel</h2>
            <Link to="/EnCartel">Ver todas</Link>

            <div className="row cards"> 
            {this.state.cartel
                .filter((peli, idx) => idx < 4)
                .map((peli) => (
            <CardPeli 
                key={peli.id}
                pelicula={peli}
                haySesion={this.state.haySesion}/>))}
                </div>

        </React.Fragment>
        )
    }

}
export default withRouter(Home)

