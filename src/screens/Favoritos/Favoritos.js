import React, {Component} from "react";
import CardPeli from "../../components/CardPeli/CardPeli";


class Favoritos extends Component{
    constructor(props){
    super(props);
    this.state={
        peliculasFavoritas: [],
        seriesFavoritas: [],
        loading: true
    }
    }
    componentDidMount(){
        let peliculasSaved= localStorage.getItem('favPeliculas')
        let favPeliculasParseadas = JSON.parse(peliculasSaved)

        if(favPeliculasParseadas == null){
            favPeliculasParseadas = [];
        }

        if(favPeliculasParseadas.length === 0){
          this.setState({
            peliculasFavoritas: [],
            loading: false
             });
            
        return;
    }

 let arrayPeliculas = [];
    
 favPeliculasParseadas.map(pelicula => {
        fetch("https:")
       
        .then((data) => {
         arrayPeliculas.push(data);
       
         this.setState({
         peliculasFavoritas: arrayPeliculas,
          loading: false
         });
          
         if (arrayPeliculas.length === favPeliculasParseadas){
            this.setState({

            });
         }
    })
    .catch((error) => console.log(error));
        });
    
    }
    render(){

    }
    return(
        <
    )
}
    

export default Favoritos