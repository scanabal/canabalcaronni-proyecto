import React, {Component} from "react";
import CardPeli from "../CardPeli/CardPeli";

class Detalle extends Component{
    constructor(props) {
        super(props);
        this.state= {
            peliculas: "",
            loading: true
        }
    }
  componentDidMount () {
const id= this.props.match.params.id
fetch ("https://api.themoviedb.org/3/movie/{movie_id}?api_key=57f7a2a82d57f08ae3dba76c4340b8c0")
.then (response => response.json())
.then (data => this.setState({
                     peliculas:data,
                     loading: false}))
.catch (error => console.log(error))

}

    render(){
        if(this.state.loading){
            return <h3>Cargando...</h3>
        }
        let pelicula= this.state.pelicula
        
    }

            
}
  





export default Detalle;
