import React, { Component } from "react";
import Cookies from "universal-cookie"; 
import CardPeli from "../CardPeli/CardPeli";

const cookies = new Cookies(); 

class Detalle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null,
        
        };
    }
    componentDidMount(){
        const id= this.props.match.params.id
        fetch("https://api.themoviedb.org/3/movie/${id}?api_key=57f7a2a82d57f08ae3dba76c4340b8c0")
        .then(response => response.json())
        .then(data => {this.setState({ pelicula: data })
        })

        .catch(error => console.log(error))
    }
    render(){
        return(
            <CardPeli/>
        )
    }

}

export default Detalle