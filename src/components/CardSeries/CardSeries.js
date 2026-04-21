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

    boton = () => {
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
        const serie = this.props.serie;

        return(
            <React.Fragment>
                <article className="single-card-movie">

                    <img
                        src={`https://image.tmdb.org/t/p/w342${serie.profile_path}`} alt={serie.name}
                    />

                    <div className="cardbody">
                        <h2 className="class-title">{serie.name}</h2>

                        {this.state.clase === "mostrar"
                            ? <div>
                                <p>Nombre original: {serie.original_name}</p>
                                <p>Género: {serie.gender}</p>
                              </div>
                            : null
                        }

                        <button className="btn alert-primary" onClick={()=>this.boton()}>
                            {this.state.ver}
                        </button>

                        <Link to={"/detalleSerie/" + serie.id}>
                            <button>Ir a detalle</button>
                        </Link>

                        {this.props.haySesion
                        ? <button>Agregar/Quitar favoritos</button>
                        : null
                        }

                    </div>

                </article>
            </React.Fragment>
        )
    }
}

export default CardSeries;