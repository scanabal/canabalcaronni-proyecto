import React, {Component} from "react";
import { Link } from "react-router-dom";

class CardPeli extends Component {
    constructor(props){
        super(props);
        this.state = {
            ver: "Ver descripcion",
            clase: "no-mostrar"
        }
    }

    boton = () => {
        let resultado = this.state.ver === "Ver descripcion"
        ? {ver: "Ocultar descripcion",
            clase: "mostrar"
        }
        :{ver: "Ver descripcion",
            clase: "no-mostrar"
        };

        this.setState(resultado)
    }

    render(){
        return(
            <React.Fragment>
                <article className="single-card-movie">

                <img src= {`https://image.tmdb.org/t/p/w342${this.props.pelicula.poster_path}`} alt={this.props.pelicula.title} className= "card-img-top"/>

                <div className= "cardBody">
                <h2 className= "class-title"> {this.props.pelicula.title}</h2> 
                <p className="card-text">
                    {this.props.pelicula.overview}
                </p>
                
                    <button className="btn alert-primary" onClick={() => this.boton()}>{this.state.ver}</button>

		            <Link to={"/detalle/" + this.props.pelicula.id}>
                        <button>Ir a detalle</button>
                    </Link>
                </div>
                </article>

            {/*boton agregar/quitar de favoritos en CardRM*/}

            </React.Fragment>
        )
    }
}

export default CardPeli