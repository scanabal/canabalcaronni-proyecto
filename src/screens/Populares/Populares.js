import React, { Component } from "react";
import CardPeli from "../../components/CardPeli/CardPeli";

class Populares extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            filtrar: "", 
            pagina: 1
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=57f7a2a82d57f08ae3dba76c4340b8c0")
            .then(response => response.json())
            .then(data => this.setState({peliculas: data.results}))
            .catch(error => console.log(error))
    }

    controlarCambios(e){
        this.setState({
            filtrar: e.target.value});
    }

    cargarMas(e){
        let nuevaPag = this.state.pagina + 1;

        fetch("https://api.themoviedb.org/3/movie/popular?api_key=57f7a2a82d57f08ae3dba76c4340b8c0&page=" + nuevaPag)
            .then(response => response.json())
            .then(data => {
                let pelisArray = this.state.peliculas; 
                
                data.results.map(peli => pelisArray.push(peli));

                this.setState({
                    peliculas: pelisArray,
                    pagina: nuevaPag
                })
            })
            .catch(error => console.log(error))
    } 

    render(){
        let filtro = this.state.filtrar;

        return(
            <React.Fragment>
                <h2>Películas populares</h2>

                <form>
                    <input type="text" placeholder="Filtrar peliculas" onChange={(e)=> this.controlarCambios(e)} value={this.state.filtrar}/>
                </form>

                {/*lista pelis*/}
                <div className="row cards">
                    {this.state.peliculas
                    .filter(peli => peli.title.toLowerCase().includes(filtro.toLowerCase()))
                    .map(peli => (
                        <CardPeli
                            key={peli.id}
                            pelicula={peli}/>
                        ))
                    }
                </div>

                <button onClick={(e)=> this.cargarMas(e)}>
                    Cargar mas
                </button>

            </React.Fragment>
        )
    }
}


export default Populares;