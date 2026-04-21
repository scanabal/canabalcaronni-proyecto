import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardSeries extends Component {
    constructor(props){
        super(props);
        this.state = {
            ver: "Ver descripcion",
            clase: "no-mostrar"
        }
    }

    boton() {
        let resultado = this.state.ver === "Ver descripcion"
        ? {
            ver: "Ocultar descripcion",
            clase: "mostrar"
        }
        : {
            ver: "Ver descripcion",
            clase: "no-mostrar"
        };

        this.setState(resultado);
    }

    render(){
        return(
            <React.Fragment>
                <article className="single-card-movie">

                    <img
                        src={`https://image.tmdb.org/t/p/w342${this.props.serie.profile_path}`}
                        alt={this.props.serie.name}
                    />

                    <div className="cardbody">

                        <h2 className="class-title">
                            {this.props.serie.name}
                        </h2>

                        {this.state.clase === "mostrar"
                        ? <p className="card-text">
                            Nombre original: {this.props.serie.original_name}
                          </p>
                        : null
                        }

                        <button
                            className="btn alert-primary"
                            onClick={() => this.boton()}
                        >
                            {this.state.ver}
                        </button>

                        <Link to={"/detalleSerie/" + this.props.serie.id}>
                            <button>Ir a detalle</button>
                        </Link>

                    </div>

                </article>
            </React.Fragment>
        )
    }
}

export default CardSeries;