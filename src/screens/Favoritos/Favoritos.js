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
            
             });
            
        return;
    }

 let arrayPeliculas = [];
    
 favPeliculasParseadas.map(pelicula => {
        fetch("https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=57f7a2a82d57f08ae3dba76c4340b8c0",{
            methos:"GET",
            headers:{
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
            }
        })
       
       
        .then((response) => response.json())
        .then((data) => {
            arrayPeliculas.push(data);
            this.setState({
            peliculasFavoritas: arrayPeliculas,
            loading: false
        })
         
         });
          
         if (arrayPeliculas.length === favPeliculasParseadas){
            this.setState({

            });
         }
    })
    .catch((error) => console.log(error));
        };
    
    }

    // render() {
    //     if(this.state.loading){
    //         return(
    //             <h2>Cargando...</h2>
    //         )
    //     }
    //     return(
    //         <div>
    //             <h1>Mis Favoritos</h1>
    //             <section>
    //                 {this.state.peliculasFavoritas.map(peli=>(
    //                     <CardPeli key={peli.id} id={peli.id}
    //                     />
    //                 ))}
    //             </section>
    //         </div>
    //     )
    // }

    

    
        
        

    
    

export default Favoritos