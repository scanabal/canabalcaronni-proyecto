import {Component} from "react"
import { withRouter, Link } from "react-router-dom";
import CardPeli from "../../components/CardPeli/CardPeli";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class SearchResults extends Component{
    constructor(props){
        super(props)
        this.state={
            resultados: [],
            haySesion: false
        }
    }

    componentDidMount(){
        const busqueda = this.props.match.params.busqueda;
        const tipo = this.props.match.params.tipo;

        if(cookies.get('auth-user')){
            this.setState({haySesion: true})
        }

        fetch(`https://api.themoviedb.org/3/search/${tipo}?query=${busqueda}&api_key=57f7a2a82d57f08ae3dba76c4340b8c0`)
        .then(response => response.json())
        .then(data => this.setState({resultados: data.results}))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                <h1>Resultados de busqueda</h1>

                <div className="cards">
                    {this.state.resultados.length === 0
                    ? <p>No hay resultados</p>
                    : this.state.resultados.map((peli, idx) => (
                    <CardPeli key={peli.id} pelicula={peli} haySesion={this.state.haySesion}/>
                ))}
                </div>
            </div>
        )}}

export default withRouter(SearchResults);