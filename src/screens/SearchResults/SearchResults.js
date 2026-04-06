import {Component} from "react"

class SearchResults extends Component{
    constructor(props){
        super(props)
        this.state={
            resultados: []
        }
    }

    componentDidMount(){
        const busqueda = this.props.match.params.busqueda;

        fetch("API${busqueda}")
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=57f7a2a82d57f08ae3dba76c4340b8c0&query=${busqueda}`)

        .then(response => response.json())
        .then(data => this.setState({resultados: data.results}))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
            <h1>Resultados de busqueda</h1>
            {this.state.resultados.map((pelicula, idx) => 
            <div key={idx}>
                <p>{pelicula.title}</p>
            </div>)}
            </div>
        )
    }
}

export default SearchResults;