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
  
 eliminarPelicula(id) {
    let nuevasPeliculas = this.state.peliculasFavoritas.filter(pelicula=> pelicula.id !== id);

    let storage = JSON.parse(localStorage.getItem("favoritosPeliculas"));
    let nuevosIds = storage.filter(fav => fav !== id);

    localStorage.setItem("favoritosPeliculas", JSON.stringify(nuevosIds));

    this.setState({ 
      peliculasFavoritas: nuevasPeliculas 
    });
  }

  eliminarSerie(id) {
    let nuevasSeries = this.state.seriesFavoritas.filter(s => s.id !== id);

    let storage = JSON.parse(localStorage.getItem("favoritosSeries"));
    let nuevosIds = storage.filter(fav => fav !== id);

    localStorage.setItem("favoritosSeries", JSON.stringify(nuevosIds));

    this.setState({
       seriesFavoritas: nuevasSeries 
      });
  }

  render() {

  let contenidoPeliculas;
  let contenidoSeries;

  if (this.state.peliculasFavoritas.length === 0) {
    contenidoPeliculas = <p>No hay películas favoritas</p>;
  } else {
    contenidoPeliculas = (
      <section className="PeliculasFav">
        {this.state.peliculasFavoritas.map((pelicula, idx) => (
          <section className="cardFav">
                                <CardPeli
                                    key={idx}
                                    id={pelicula.id}
                                    img={pelicula.poster_path}
                                    title={pelicula.original_title}
                                    overview={pelicula.overview}
                                />

              <button onClick={() => this.eliminarPelicula(pelicula.id)} className="eliminar">
              Eliminar
            </button>
            
          </section>
        ))}
      </section>
     );
   }

    if (this.state.seriesFavoritas.length === 0) {
     contenidoSeries = <p>No hay series favoritas</p>;
   } else {
     contenidoSeries = (
       <section className="SeriesFav">
         {this.state.seriesFavoritas.map((serie, idx) => (
           <section className="cardFav">
                                 <CardSerie
                                     key={idx}
                                     id={serie.id}
                                     img={serie.poster_path}
                                     title={serie.original_name}
                                     overview={serie.overview}
                                 />

             <button onClick={() => this.eliminarSerie(serie.id)} className="eliminar">
               Eliminar
            </button>
           </section>
         ))}
       </section>
     );
   }

   return (
     <main>
       <h1>Favoritos</h1>

       <section>
         <h2>Películas favoritas</h2>
          {contenidoPeliculas}
       </section>

      <section>
        <h2>Series favoritas</h2>
        {contenidoSeries}
      </section>
    </main>
    );
  }
}
    
    

export default Favoritos;