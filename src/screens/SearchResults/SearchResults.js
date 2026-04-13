import {Component} from "react"
import { withRouter, Link } from "react-router-dom";
import CardPeli from "../../components/CardPeli/CardPeli";

class SearchResults extends Component{
    constructor(props){
        super(props)
        this.state={
            resultados: []
        }
    }

    componentDidMount(){
        const busqueda = this.props.match.params.busqueda;

        fetch(`https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=57f7a2a82d57f08ae3dba76c4340b8c0`)
        .then(response => response.json())
        .then(data => this.setState({resultados: data.results}))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <h1>Resultados de busqueda</h1>

                <div className="cards">
                {this.state.resultados.map((peli, idx) => (
                    <CardPeli key={peli.id} pelicula={peli} />
                ))}
                </div>
            </div>
        )}}

export default withRouter(SearchResults);