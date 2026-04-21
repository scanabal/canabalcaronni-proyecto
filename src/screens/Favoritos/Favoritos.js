import React, {Component} from "react";
import CardPeli from "../../components/CardPeli/CardPeli";

class Favoritos extends Component{
    constructor(props){
    super(props);
    this.state={
        peliculasFavoritas: [],
        seriesFavoritas: [],
        
    }
    }
  

   componentDidMount(){
    // PELICULAS
      let peliculasSaved= localStorage.getItem('peliculasFavoritas')
      let peliculasFavoritasParseadas = peliculasSaved ? JSON.parse(peliculasSaved): []
      // si hay algo guardado parsealo sino array vacio
      let peliculasDetalle= []

      peliculasFavoritasParseadas.map(id =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=57f7a2a82d57f08ae3dba76c4340b8c0`) })
         .then(response => response.json())
         .then(data => {
            peliculasDetalle.push(data)
            this.setState({
                peliculasFavoritas: peliculasDetalle
            }) 
      
       .catch((error) => console.log(error));
        })

      
      //SERIES
      let seriesSaved= localStorage.getItem('seriesFavoritas')
      let seriessFavoritasParseadas = seriesSaved ? JSON.parse(seriesSaved): []
      // si hay algo guardado parsealo sino array vacio

       let seriesDetalle= []

       seriesFavoritasParseadas.map(id =>{
         fetch(`https://api.themoviedb.org/3/series/${id}?api_key=57f7a2a82d57f08ae3dba76c4340b8c0`) })
          .then(response => response.json())
          .then(data => {
            seriesDetalle.push(data)
            this.setState({
                 seriesFavoritas: seriesDetalle
             }) 
      
       .catch((error) => console.log(error));
      })
        
}
}
    
    

export default Favoritos;