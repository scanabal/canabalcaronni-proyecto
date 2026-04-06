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